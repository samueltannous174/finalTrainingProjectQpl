import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export async function addBlog(blogData) {
    try {
        return await prisma.blog.create({
            data: {
                title: blogData.title,
                paragraph: blogData.paragraph,
                image: blogData.image,
                author: blogData.author,
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
            orderBy: { title: 'desc' },
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
