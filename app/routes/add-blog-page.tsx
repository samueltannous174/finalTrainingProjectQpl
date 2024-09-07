import {addBlog} from "~/server/dataBaseData";
import {json, redirect} from "@remix-run/node";
import {validate} from "~/server/addFormValidation";
import {requireUserSession} from "~/server/authData";
import {useTheme} from "~/components/ThemeContext/ThemeContext";
import {AddBlogPartOne} from "~/components/addBlogPage/AddBlogPartOne";
import {AddBlogPartTwo} from "~/components/addBlogPage/AddBlogPartTwo";
import {useState} from "react";

export default function AddBlogPage() {
    const [content,setContent]=useState("")
    const { theme } = useTheme();

    return (
        <main className={`grid grid-cols-1 md:min-h-[900px] ${theme === 'dark' ? 'bg-gray-900' : 'bg-blue-50'}`}>
                <AddBlogPartOne content={content} setContent={setContent}/>
                <AddBlogPartTwo content={content}/>
        </main>
    );
}


type Blog = {
    title: string;
    paragraph: string;
    image: string;
    authorId: number;
};

export async function loader({request}){
    await requireUserSession(request)
    return json({ message: ' successfully ' }, { status: 200 });
}


export async function action({ request }) {
    console.lg("hello 99")
    const formData = await request.formData();
    const userId= await requireUserSession(request)
    const blogData = Object.fromEntries(formData) as Blog;
    console.log(blogData)
    blogData.authorId=userId
    try {
        validate(blogData)
    } catch (errors) {
        return Object.values(errors)
    }
        await addBlog(blogData);

    return redirect('/');
}
