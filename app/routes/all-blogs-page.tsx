import { useLoaderData } from "react-router";
import { getBlogs } from "~/server/data";
import BlogsContainer from "../components/allBlogsPage/blogsContainer";

interface Blog {
    id: number;
    name: string;
    value: number;
}

export default function AllBlogsPage() {
    const blogs = useLoaderData<Blog[]>();


    return (
        <div className=" bg-[#020b21] min-w-[420px]">
                <BlogsContainer blogs={blogs} />
        </div>
    );
}

export function loader() {
    return getBlogs();
}
