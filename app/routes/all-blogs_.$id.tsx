import {getBlogsById} from "~/server/data";
import {useLoaderData} from "react-router";
import BlogPage from "~/components/addBlogPage/BlogPage";


export default function Index() {
            const chosenBlog=useLoaderData()
    try {
        console.log(chosenBlog)
    } catch (error){
        console.log(error)
    }

    return (
        <main className="bg-gray-900 h-[2000px]  ">
        <BlogPage blogData={chosenBlog}>

        </BlogPage>
        </main>
    );
}

export async function loader({params}) {
    const blog = await getBlogsById(params.id);
    return blog;
}
