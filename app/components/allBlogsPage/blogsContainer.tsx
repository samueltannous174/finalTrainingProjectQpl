import BlogCard from "~/components/allBlogsPage/BlogCard";
import {useLoaderData} from "react-router";

export default function BlogsContainer() {
    const blogs = useLoaderData();

    return (
            <div className="mx-auto w-[80%] flex flex-col gap-4  pb-10 pt-10 min-h-screen  ">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>

    );
}



