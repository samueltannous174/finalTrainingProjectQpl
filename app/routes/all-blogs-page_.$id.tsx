import {useLoaderData, useParams} from "react-router";
import BlogPage from "~/components/blogPage/BlogPage";

// type User={
//     id:number;
//     email:string;
//     password:string;
//     name:string;
//     image:string;
// }
// type Comment={
//     content: string;
//     createdAt: number;
//     blogId: number;
//     authorId:number;
// }

// interface Blog {
//     title: string;
//     paragraph: string;
//     image: string;
//     authorId: number;
//     author:User;
//     comment: Comment
// }

export default function AllBlogsPageId() {
    const blogs=useLoaderData()
    console.log(blogs)

    const params=useParams()
    const chosenBlog=blogs.filter((blog)=>blog.id=== params.id)

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

