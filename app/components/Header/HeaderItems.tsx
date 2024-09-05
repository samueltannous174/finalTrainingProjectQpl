import { Link } from "react-router-dom";
import { useLoaderData } from "@remix-run/react";
import { Form } from "@remix-run/react";
import ThemeToggle from "~/components/Header/ThemeToggle";
import { useTheme } from "~/components/ThemeContext/ThemeContext";

export default function HeaderItems() {
    const user = useLoaderData();
    const { theme } = useTheme();

    return (
        <>
            <div className={`text-2xl font-bold max-w-[100px] ${theme === 'dark' ? 'bg-[#9cd6f3]' : 'bg-gray-200'} select-none`}>
                <img
                    className="select-none"
                    src="https://www.sam.biz/wp-content/uploads/2023/09/SAM_TM_color_rgb.png"
                    alt="sam"
                />
            </div>
            <nav className={`hidden md:flex space-x-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
                <Link to="/" className={`self-center hover:bg-cyan-900 select-none px-4 py-2 text-justify ${theme === 'dark' ? 'text-blue-200' : 'text-blue-400'}`}>
                    Home
                </Link>
                <Link to="/all-blogs-page" className={`self-center hover:bg-cyan-900 select-none px-4 py-2 text-justify ${theme === 'dark' ? 'text-blue-200' : 'text-blue-400'}`}>
                    Blog Pages
                </Link>
                <Link to="/add-blog-page/?mode=add" className={`hover:bg-cyan-900 select-none px-4 py-2 ${theme === 'dark' ? 'text-blue-200' : 'text-blue-400'}`}>
                    Add New Blog
                </Link>
                <ThemeToggle />
            </nav>

            <div>
                {user ? (
                    <div className={`hidden md:flex gap-4 p-1 box-border items-center justify-center ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                        <img
                            className="w-[45px] h-[45px] rounded-full object-cover"
                            src={user.image}
                            alt="userImage"
                        />
                        <p className={`font-bold ${theme === 'dark' ? 'text-amber-300' : 'text-amber-700'}`}>
                            Welcome {user.name}
                        </p>
                        <Form method="post" action="/logout" id="logout-form">
                            <button className={`px-6 py-1 font-bold rounded-md hover:bg-purple-200 select-none ${theme === 'dark' ? 'bg-cyan-950 text-white' : 'bg-cyan-700 text-white'}`}>
                                Sign Out
                            </button>
                        </Form>
                    </div>
                ) : (
                    <Link
                        to="/auth-page?mode=login"
                        className={`hidden md:flex px-6 py-1 font-bold rounded-md hover:bg-purple-200 select-none ${theme === 'dark' ? 'bg-cyan-950 text-white' : 'bg-cyan-700 text-white'}`}
                    >
                        Sign In
                    </Link>
                )}
            </div>
        </>
    );
}
