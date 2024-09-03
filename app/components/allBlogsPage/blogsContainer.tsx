import BlogCard from "~/components/allBlogsPage/BlogCard";
import {useLoaderData} from "react-router";


interface Blog {
    id: number;
    title: string;
    paragraph: string;
    image: string;
    authorId: number;
}



export default function BlogsContainer() {
    const blogs = useLoaderData<Blog[]>();

    return (
        <>
            <div className="mx-auto w-[80%] flex flex-col gap-4   pt-10  ">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </>
    );
}


