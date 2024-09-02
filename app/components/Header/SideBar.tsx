import {Form, Link} from "@remix-run/react";
import {useState} from "react";
import {useLoaderData} from "react-router";

export default function SideBar (){
    const user=useLoaderData()
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    return<div className="md:hidden">
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="md:hidden inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden focus:outline-none focus:ring-2  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
        >
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>

        <aside id="default-sidebar"   className={`fixed top-0 right-0 z-40 w-64 h-screen transition-transform bg-gray-600${
            isOpen ? 'translate-x-0' : ' hidden'
        } sm:translate-x-0`}
               aria-label="Sidebar">

            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800 dark:bg-gray-800">
                <ul className="space-y-2 p-0 font-medium flex-col flex">

                        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="md:hidden  items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg  focus:outline-none focus:ring-2  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                onClick={toggleSidebar}
                        >
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>
                    <Link to="/" className=" text-blue-50 hover:bg-cyan-900 select-none px-4 py-2 text-center">Home</Link>
                    <Link to="/all-blogs-page" className=" text-blue-50 hover:bg-cyan-900 select-none px-4 py-2   text-center">Blog Pages</Link>
                    <Link to="/add-blog-page/?mode=add" className=" text-blue-50 hover:bg-cyan-900 select-none px-4 py-2 text-center">Add New Blog</Link>
                    <div>
                        {user ?  <div className="text-center  align-middle md:flex gap-4 space-y-4 p-1 box-border  items-center justify-center">

                                <img className="w-[60px] h-[60px] rounded-full mx-auto  " src={user.image} alt="userImage"/>
                                <p className="text-amber-200  font-bold justify-center text-center">
                                    welcome {user.name}
                                </p>

                                <Form method="post" action="/logout" id="logout-form">
                                    <button className=" px-6 py-1 text-white bg-cyan-950 font-bold rounded-md hover:bg-purple-200 select-none">Sign Out</button>
                                </Form>
                            </div>
                            :
                            <Link to="/auth-page?mode=login" className="px-6 py-1 text-white bg-cyan-950 font-bold rounded-md hover:bg-purple-200 select-none">
                                Sign In
                            </Link>
                        }
                    </div>
                </ul>
            </div>

        </aside>


    </div>


}