import {addBlog} from "~/server/dataBaseData";
import { redirect} from "@remix-run/node";
import {validate} from "~/server/addFormValidation";
import QuillComponent from "~/components/addBlogPage/quillEditor/QuillComponent";
import {useState} from "react";
import AddBlogForm from "~/components/addBlogPage/AddBlogForm";
import BlogPage from "~/components/blogPage/BlogPage";
import {requireUserSession} from "~/server/authData";
import {useTheme} from "~/components/ThemeContext/ThemeContext";
export default function AddBlogPage() {

    const [content, setContent] = useState<string>(  '');
    const { theme } = useTheme();

    return (
        <main className={`md:min-h-[900px] ${theme === 'dark' ? 'bg-gray-800' : 'bg-yellow-50'}`}>
                <div className=" grid grid-cols-1  ">
                <section className=" flex flex-col bg-sky-900 items-center space-y-1 justify-center md:fixed ">
                    <AddBlogForm content={content}/>
                    <div className=" bg-sky-900 flex justify-center  ">
                        <QuillComponent setContent={setContent} />
                    </div>
                </section>
                    <section className="md:w-[50%] md:ml-[50%] gap-4 h-full   ">
                    <div className="flex justify-start  w-full">
                        <h1 className="text-2xl text-gray-500 p-5">
                            your custom blog:
                        </h1>
                    </div>
                    <BlogPage  content={content}  />
                </section>
            </div>
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
    return  requireUserSession(request)
}
export async function action({ request }) {
    const formData = await request.formData();
    const userId= await requireUserSession(request)
    const blogData = Object.fromEntries(formData) as Blog;
    console.log(blogData)
    blogData.authorId=userId
    try {
        validate(blogData)
    } catch (errors) {
        const errorMessages = Object.values(errors);
        return errorMessages
    }
    await addBlog(blogData);
    return redirect('/');
}
