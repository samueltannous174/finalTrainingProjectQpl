import BlogPage from "~/components/blogPage/BlogPage";

type Props={
    content:string
}
export function AddBlogPartTwo ({content} : Props){
    return <section className="md:w-[50%] md:ml-[50%] gap-4 h-full   ">
        <div className="flex justify-start  w-full">
            <h1 className="text-2xl text-gray-500 p-5">
                your custom blog:
            </h1>
        </div>
        <BlogPage  content={content}  />
    </section>
}