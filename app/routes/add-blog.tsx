import {addBlog} from "~/server/data";
import {redirect} from "@remix-run/node";
import BlogPage from "~/components/addBlogPage/BlogPage";
import {useState} from "react";
import AddForm from "~/components/addBlogPage/AddForm";
import {validate} from "~/server/formValidation";
export default function AddBlog() {
    const paragraph= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" + "\n"
    const [blogData, setBlogData] = useState({
        title: 'Title',
        paragraph: paragraph,
        image: 'https://cdn.pixabay.com/photo/2017/04/20/07/07/add-2244771_960_720.png',
        author: 'Author',
    })

    const [fontType, setFontType] = useState<string>('font-normal');

    const handleFontChange = (newFontType: string) => {
        setFontType(newFontType);
    };

    return (
        <div className=" bg-gray-800 h-[1000px]">
            <div className="flex mt-[40px] ">
                <div className="flex-[70%]">
                    <BlogPage blogData={blogData} fontType={fontType}  />
                </div>
                <div className="flex-[10%]">
                    <AddForm  blogData={blogData} setBlogData={setBlogData} handleFontChange={handleFontChange} fontType={fontType}/>
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