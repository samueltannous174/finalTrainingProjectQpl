import {Link} from "react-router-dom";
import {useLoaderData} from "react-router";
import {Form} from "@remix-run/react";

export default function HeaderItems() {
    const user=useLoaderData()

    return (
        <>
        <div className="text-2xl font-bold text-gray-800 max-w-[100px] bg-[#9cd6f3] select-none">
            <img className="select-none" src="https://www.sam.biz/wp-content/uploads/2023/09/SAM_TM_color_rgb.png"
                 alt="sam"
            />
        </div>
        <nav className="hidden md:flex space-x-6 ">
            <Link to="/" className=" text-blue-50 hover:bg-cyan-900 select-none px-4 py-2 text-justify">Home</Link>
            <Link to="/all-blogs-page" className=" text-blue-50 hover:bg-cyan-900 select-none px-4 py-2  text-justify ">Blog Pages</Link>
            <Link to="/add-blog-page/?mode=add" className=" text-blue-50 hover:bg-cyan-900 select-none px-4 py-2">Add New Blog</Link>
        </nav>


        <div>
                {user ?  <div className="hidden md:flex gap-4 p-1 box-border  items-center justify-center">
                    <img className="w-[45px] h-[45px] rounded-full object-cover "
                         src={user.image}
                         alt="userImage"
                    />

                    <p className="text-amber-200 text-justify font-bold">
                        welcome {user.name}
                    </p>

                        <Form method="post" action="/logout" id="logout-form">
                        <button className=" px-6 py-1 text-white bg-cyan-950 font-bold rounded-md hover:bg-purple-200 select-none">Sign Out</button>
                    </Form>
                    </div>
                    :
                    <Link to="/auth-page?mode=login" className=" hidden md:flex  px-6 py-1 text-white bg-cyan-950 font-bold rounded-md hover:bg-purple-200 select-none">
                    Sign In
                    </Link>
                }
        </div>
    </>)
}


