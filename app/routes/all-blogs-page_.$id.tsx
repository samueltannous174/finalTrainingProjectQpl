import {useLoaderData} from "react-router";
import BlogPage from "~/components/blogPage/BlogPage";
import {addComment, getBlogsById, getUserById} from "~/server/dataBaseData";
import {getUserFromSession} from "~/server/authData";
import {json} from "@remix-run/node";

type User={
    id:number;
    email:string;
    password:string;
    name:string;
    image:string;
}
type Comment={
    content: string;
    createdAt: number;
    blogId: number;
    authorId:number;
}

interface Blog {
    title: string;
    paragraph: string;
    image: string;
    authorId: number;
    author:User;
    comment: Comment
}
type Data={
    blog: Blog
    user: User

}

export default function AllBlogsPageId() {
    const data=useLoaderData() as Data


    return (
        <main className="bg-gray-900  ">
            <BlogPage blogData={data.blog}/>
        </main>
    );
}

export async function loader({ params, request }) {
    const blog = await getBlogsById(params.id);
        const userId = await getUserFromSession(request);
        if (userId){
            const user = await getUserById(userId);
            const data = { blog, user };
            return json(data);
        }
    const data = { blog };
    return json(data);
}

export const action = async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const commentsData = Object.fromEntries(formData)
    const updatedComment = {
        ...commentsData,
        blogId: parseInt(commentsData.blogId as string, 10),
        authorId: parseInt(commentsData.authorId as string, 10)
    }
    try {
        return  addComment(updatedComment)
    }catch (error){
        console.log(error)
    }
};