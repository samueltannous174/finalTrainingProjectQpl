import {Link} from "react-router-dom";
import {useNavigate} from "@remix-run/react";
import HtmlRenderer from "~/components/addBlogPage/quillEditor/HtmlRenderer";


type User={
    id:number;
    email:string;
    password:string;
    name:string;
    image:string;
}
interface BlogWithAuthorName {
    id: number;
    title: string;
    paragraph: string;
    image: string;
    author: User;
}

interface BlogCardProps {
    blog: BlogWithAuthorName;
}



export default function BlogCard({blog} : BlogCardProps) {
    const author="by  "+blog.author.name

    const navigate = useNavigate();
    const handleNavigateToBlogPage = () => {
        navigate(`/all-blogs-page/${blog.id}`);
    }
    return (
        <button className="grid bg-gray-700  blogCard lg:grid-cols-2  gap-4 "
        onClick={handleNavigateToBlogPage}
        >
            <section  className=" lg:h-[400px] md: h-[200px]  flex flex-col  items-center align-middle justify-center p-5 box-border  " >
                    <img className=" lg:w-[90%] h-full rounded-lg " src={blog.image} alt="blogArticle " />
            </section>
            <section className=" flex flex-col  justify-around items-center bg-gray-800  h-[400px]   ">
                <nav className=" flex space-x-6 ">
                    <Link  className=" text-blue-50 hover:bg-cyan-900 select-none px-12 py-5 text-xl">About</Link>
                </nav>
                <div className="flex flex-col space-y-2 items-center  ">
                    <h1 className="sm:text-7xl text-5xl  font-bold text-white">
                        {blog.title}
                    </h1>

                    <p className="text-cyan-500 italic font-semibold">
                             {author}
                    </p>
                </div>

            </section>
        </button>
    );
}

