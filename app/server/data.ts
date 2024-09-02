import {Prisma, PrismaClient} from '@prisma/client';
import {hash} from "@vanilla-extract/integration";
import {createCookieSessionStorage, redirect} from "@remix-run/node";
import * as process from "process";


const prisma = new PrismaClient();

export async function addBlog(blogData) {


    try {
        return await prisma.blog.create({
            data: {
                title: blogData.title,
                paragraph: blogData.paragraph,
                image: blogData.image,
                authorId: blogData.authorId,
            }
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export async function getBlogs() {
    try {
        const blogs = await prisma.blog.findMany({
            orderBy: { title: 'desc' } as Prisma.BlogOrderByWithRelationInput,
        });
        return blogs;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export async function getBlogsById(blogId) {
    const id = parseInt(blogId);

    try {
        const blog = await prisma.blog.findUnique({
            where: { id: id },
        });
        return blog;
    } catch (error) {
        console.log(error);
        throw error;

    }
}


type Credentials={
    id:number;
    email:string;
    password:string;
    name:string;
    image:string;
}

export async function signup({ email, password , name,image }: Credentials) {
    const existingUser = await prisma.user.findFirst({ where: { email } });
    const existingAuthor = await prisma.user.findFirst({ where: { name } });

    console.log(existingAuthor)

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
    console.log("existingUser:"+existingUser)
    if (!existingUser) {
        const error = new Error(
            'Could not log you in, please check the provided email.'
        );
        throw error;
    }

    const passwordCorrect = hash(password)=== existingUser.password
    console.log(passwordCorrect)
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
    console.log(request)
    const session = await sessionStorage.getSession(
        request.headers.get('Cookie')
    );

    const userId = session.get('userId');
    console.log(userId)

    if (!userId) {
        console.log("empty")
        return null;
    }
    return userId;
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
}

