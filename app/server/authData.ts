import {hash} from "@vanilla-extract/integration";
import process from "process";
import {createCookieSessionStorage, redirect} from "@remix-run/node";
import {prisma} from './dataBaseData'
type Credentials={
    id:number;
    email:string;
    password:string;
    name:string;
    image:string;
}

export async function signup({ email, password , name,image }: Credentials) {
    const existingUser = await prisma.user.findFirst({ where: { email } });
    // const existingAuthor = await prisma.user.findFirst({ where: { name } });


    if (existingUser) {
        const newError="Could not log you in, please check the provided email."
        throw newError;
    }

    const passwordHash =  hash(password);

    const user=await prisma.user.create({ data: { email: email, password: passwordHash,name:name,image:image }}) as Credentials ;
    return createUserSession(user.id, '/');

}
type CredentialsLogin={
    id: number
    email:string;
    password:string;
}

export async function login({ email, password }) {
    const existingUser = await prisma.user.findFirst({where: {email}}) as CredentialsLogin;
    if (!existingUser) {
        const error = new Error(
            'Could not log you in, please check the provided email.'
        );
        throw error;
    }

    const passwordCorrect = hash(password)=== existingUser.password
    if (!passwordCorrect) {
        const error = new Error(
            'Could not log you in, please check the provided password.'
        );
        throw error;
    }
    return  createUserSession(existingUser.id,'/')
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
export async function getUserFromSession(request) {
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
    const userId = await getUserFromSession(request);

    if (!userId) {
        throw redirect('/auth-page?mode=login');
    }
    else{
        return userId
    }
}