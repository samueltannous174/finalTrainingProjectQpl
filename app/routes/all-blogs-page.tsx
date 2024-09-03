import BlogsContainer from "../components/allBlogsPage/blogsContainer";
import {getBlogs, getUserNameById} from "~/server/dataBaseData";
import {json} from "@remix-run/node";


export default function AllBlogsPage() {
    return (
        <div className=" bg-[#020b21] min-w-[420px]">
                <BlogsContainer  />
        </div>
    );
}

export async function loader() {
    const blogs= await getBlogs();
    const blogsWithAuthors = await Promise.all(
        blogs.map(async (blog) => {
            const authorName = await getUserNameById(blog.authorId);
            return { ...blog, authorName };
        })
    )
    return json(blogsWithAuthors);
}

