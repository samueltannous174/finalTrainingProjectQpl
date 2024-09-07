import {Prisma, PrismaClient} from '@prisma/client';


export const prisma = new PrismaClient();

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
        throw new Error("could not add blog");   //root error boundary
    }
}
export async function getBlogs() {
    try {
        return await prisma.blog.findMany({
            orderBy: {title: 'desc'} as Prisma,
            include: {author: true, comments: true}
        });
    } catch (error) {
        throw new Error("could not get blogs");
    }
}
export async function getBlogsById(blogId) {
    const id = parseInt(blogId);
    try {
        return await prisma.blog.findUnique({
            where: {id: id},
            include: {
                comments: {
                    include: {
                        author: true,
                    },
                },
            },
        });
    } catch (error) {
        throw new Error("could not get the page id");
    }
}


export async function getUserById(userId: number) {
    if (userId){
        const user = await prisma.user.findUnique({
            where: { id: userId },
        })
        return user ? user : null;
    }
    else{
        return null
    }
}

export async function addComment(commentData) {

    try {
        return  prisma.comment.create({
            data: {
                content: commentData.content,
                blogId: commentData.blogId,
                authorId: commentData.authorId,
            },
        });
    }
    catch (error){
        console.log(error)
        throw error
    }

}











