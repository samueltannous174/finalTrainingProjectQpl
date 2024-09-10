import process from "process";
import {createCookieSessionStorage, redirect} from "@remix-run/node";
import {supabase} from "~/components/supabaseClient";
import {prisma} from "~/server/dataBaseData";


export async function signup(email,image,name, password ) {
    const fileName = `${name}-image`;

    const { error: uploadError } = await supabase.storage
        .from('UsersImages')
        .upload(fileName, image, {
            cacheControl: '3600',
            upsert: false,
            contentType: image.contentType
        })
    if (uploadError) {
        throw new Error(`Image upload failed: ${uploadError.message}`);
    }

    const { data , error: signUpError } = await supabase.auth.signUp({
        email,
        password,
    })
    if (signUpError) {
        throw new Error(signUpError.message);
    }

    const userIdInt = parseInt(data.user?.id, 10);

    await prisma.user.create({
        data: {
            id: userIdInt,
            email: email,
            name: name
        }
    });



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
        secure: process.env.NODE_ENV === 'production',
        secrets: [SESSION_SECRET],
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60,
        httpOnly: true,
    },
});
async function createUserSession(userId, redirectPath) {
    const session = await sessionStorage.getSession();
    session.set('userId', userId);
    return redirect(redirectPath, {
        headers: {
            'Set-Cookie': await sessionStorage.commitSession(session),
        },
    });
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