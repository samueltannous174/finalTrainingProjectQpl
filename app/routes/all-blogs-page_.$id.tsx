import {getBlogsById} from "~/server/dataBaseData";
import {useLoaderData} from "react-router";
import BlogPage from "~/components/blogPage/BlogPage";
interface Blog {
    title: string;
    paragraph: string;
    image: string;
    authorId: number;
}

export default function AllBlogsPage_Id() {
            const chosenBlog=useLoaderData() as Blog
    try {
        console.log(chosenBlog)
    } catch (error){
        console.log(error)
    }

    return (
        <main className="bg-gray-900  ">
            <BlogPage blogData={chosenBlog}/>

        </main>
    );
}

export async function loader({params}) {
    const blog = await getBlogsById(params.id);
    return blog;
}
