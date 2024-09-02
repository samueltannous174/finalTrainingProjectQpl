import BlogCard from "~/components/allBlogsPage/BlogCard";

interface Blog {
    id: number;
    title: string;
    paragraph: string;
    image: string;
    author: string;
}

interface BlogsContainerProps {
    blogs: Blog[];
}

export default function BlogsContainer({ blogs }: BlogsContainerProps) {
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
