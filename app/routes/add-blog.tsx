import {addBlog} from "~/server/data";
import {redirect} from "@remix-run/node";
import BlogPage from "~/components/addBlogPage/BlogPage";
import {validate} from "~/server/formValidation";
import QuillComponent from "~/components/quillEditor/QuillComponent";
import {useState} from "react";
import AddBlogForm from "~/components/addBlogPage/AddBlogForm";
export default function AddBlog() {
    const paragraph= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" + "\n"
    const [blogData] = useState({
        title: 'Title',
        paragraph: paragraph,
        image: 'https://cdn.pixabay.com/photo/2017/04/20/07/07/add-2244771_960_720.png',
        author: 'Author',
    })


    const [content, setContent] = useState<string>(  '');

    return (

        <div className=" bg-gray-800 md:min-h-full">
            <div className=" mt-[40px] grid grid-cols-1 md:h-[2000px] ">
                <div className=" flex flex-col bg-sky-900 items-center space-y-1 justify-center md:fixed  ">
                    <AddBlogForm/>
                    <div className=" bg-sky-900 flex justify-center  ">
                        <QuillComponent setContent={setContent} />
                    </div>
                </div>
                <div className="md:w-[50%] right-0 md:absolute gap-4 h-full  ">
                    <div className="flex justify-start  w-full">
                        <h1 className="text-2xl  p-5">
                            your custom blog:
                        </h1>
                    </div>
                    <BlogPage blogData={blogData} content={content}  />
                </div>

            </div>
        </div>
    );
}
export async function action({ request }) {
    const formData = await request.formData();
    console.log(formData)
    const blogData = Object.fromEntries(formData);
    try {
        validate(blogData)
    } catch (error) {
        console.log(error)
        return error
    }
    await addBlog(blogData);
    return redirect('/');
}