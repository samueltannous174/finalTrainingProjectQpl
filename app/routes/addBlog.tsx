import Header from "~/components/landingPage/Header/Header";
import {addBlog} from "~/server/data";
import {redirect} from "@remix-run/node";
import AddForm from "~/components/addBlogPage/AddForm";
import BlogPage from "~/components/addBlogPage/Blog";
export default function AddBlog() {

    return (
        <div className=" bg-gray-800 h-[1000px]">
            <div className="w-full fixed boxShadowHeader top-0 bg-gray-900 z-10">
                <Header/>
            </div>
            <div className="flex mt-[40px] ">
                <div className="flex-[70%]">
                    <BlogPage/>
                </div>
                <div className="flex-[10%]">
                    <AddForm/>
                </div>
            </div>
        </div>
    );
}
export async function action({ request }) {
    const formData = await request.formData();
    console.log(formData)
    const blogData = Object.fromEntries(formData);
    await addBlog(blogData);
    return redirect('/');
}