import BlogsContainer from "../components/allBlogsPage/blogsContainer";
import {addComment, getBlogs} from "~/server/dataBaseData";
import {json} from "@remix-run/node";


export default function AllBlogsPage() {
    return (
        <div className=" bg-[#020b21] min-w-[420px]">
                <BlogsContainer  />
        </div>
    );
}




export async function loader() {
    const blogs= await getBlogs();
    return json(blogs);
}


export const action = async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const commentsData = Object.fromEntries(formData)

    try {
      return  addComment(commentsData)
    }catch (error){
        console.log(error)
    }

};