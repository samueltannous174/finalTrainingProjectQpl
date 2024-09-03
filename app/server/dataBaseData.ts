import {Prisma, PrismaClient} from '@prisma/client';



export const prisma = new PrismaClient();



interface Blog {
    id: number;
    title: string;
    paragraph: string;
    image: string;
    authorId: number;
}

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
type User={
    id:number;
    email:string;
    password:string;
    name:string;
    image:string;
}
export async function getUserNameById(userId: number): Promise<string | null> {
    if (userId){
        const user = await prisma.user.findUnique({
            where: { id: userId },
        }) as User
        return user ? user.name : null;
    }
    else{
        return null
    }
}
export async function getUserById(userId: number): Promise<User | null> {
    if (userId){
        const user = await prisma.user.findUnique({
            where: { id: userId },
        }) as User
        return user ? user : null;
    }
    else{
        return null
    }
}




