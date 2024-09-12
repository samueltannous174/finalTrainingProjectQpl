import process from "process";
import {createCookieSessionStorage, redirect} from "@remix-run/node";
import {supabase} from "~/components/supabaseClient";
import {prisma} from "~/server/dataBaseData";


export async function signup(email,name, password ) {
    const { data , error: signUpError } = await supabase.auth.signUp({
        email,
        password,
    })
    if (signUpError) {
        throw new Error(signUpError.message);
    }

    console.log(data)
    console.log(data.user?.id)

    if (data.user?.id){
        try {
            await prisma.user.create({
                data: {
                    id: data.user?.id,
                    email: email,
                    name: name
                }
            })
        }
        catch (error){
            throw new Error(error   );
        }

    }

    return createUserSession(data.user?.id, '/');

}

export async function login( email, password ) {
    console.log(email, password)
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        throw new Error(error.message);
    }
    return  createUserSession(data.user?.id,'/')
}

const SESSION_SECRET = process.env.SESSION_SECRET;

const sessionStorage = createCookieSessionStorage({
    cookie: {
        secure: process.env.NODE_ENV === 'production', //This ensures that cookies are only transmitted over secure HTTPS connections when the app is in production. In development, it allows cookies to be transmitted over HTTP.
        secrets: [SESSION_SECRET],
        sameSite: 'lax', //This setting helps protect against CSRF (Cross-Site Request Forgery) by limiting how cookies are sent with cross-site requests. 'lax' is a good balance between security and usability.
        maxAge: 30 * 24 * 60 * 60, //expire
        httpOnly: true, //This prevents the cookie from being accessed by client-side JavaScript, increasing security by mitigating XSS (Cross-Site Scripting) attacks.
    }
});
async function createUserSession(userId, redirectPath) {
    const session = await sessionStorage.getSession();
    session.set('userId', userId);
    return redirect(redirectPath, {
        headers: {
            'Set-Cookie': await sessionStorage.commitSession(session),
        },
    })
}


export async function getUserIdFromSession(request) {
    const session = await sessionStorage.getSession(
        request.headers.get('Cookie')
    );

    const userId = session.get('userId');

    if (!userId) {
        return null;
    }

    else{
        return userId
    }
}

export async function destroyUserSession(request) {
    const session = await sessionStorage.getSession(
        request.headers.get('Cookie')
    );

    return redirect('/', {
        headers: {
            'Set-Cookie': await sessionStorage.destroySession(session),
        },
    });
}
export async function requireUserSession(request) {
    const userId = await getUserIdFromSession(request);

    if (!userId) {
        throw redirect('/auth-page?mode=login');
    }
    else{
        return userId
    }
}



//make the session and save the id in it after it will be added to the request.header