import { Form, Link } from "@remix-run/react";
import { useState } from "react";
import { useLoaderData } from "react-router";
import {useTheme} from "~/components/ThemeContext/ThemeContext";

export default function SideBar() {
    const user = useLoaderData();
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="md:hidden">
            <button
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className={`inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg focus:outline-none focus:ring-2 ${
                    theme === "dark"
                        ? "text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                        : "text-gray-700 hover:bg-gray-300 focus:ring-gray-400"
                }`}
                onClick={toggleSidebar}
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                </svg>
            </button>

            <aside
                id="default-sidebar"
                className={`fixed top-0 right-0 z-40 w-64 h-screen transition-transform ${
                    isOpen ? "translate-x-0" : "hidden"
                } sm:translate-x-0 ${
                    theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                }`}
                aria-label="Sidebar"
            >
                <div
                    className={`h-full px-3 py-4 overflow-y-auto ${
                        theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                >
                    <ul className="space-y-2 p-0 font-medium flex-col flex">
                        <button
                            data-drawer-target="default-sidebar"
                            data-drawer-toggle="default-sidebar"
                            aria-controls="default-sidebar"
                            type="button"
                            className={`md:hidden items-center p-2 mt-2 ms-3 text-sm rounded-lg focus:outline-none focus:ring-2 ${
                                theme === "dark"
                                    ? "text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                                    : "text-gray-700 hover:bg-gray-300 focus:ring-gray-400"
                            }`}
                            onClick={toggleSidebar}
                        >
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                />
                            </svg>
                        </button>

                        <Link
                            to="/"
                            className={`text-center select-none px-4 py-2 ${
                                theme === "dark"
                                    ? "text-blue-50 hover:bg-cyan-900"
                                    : "text-gray-900 hover:bg-gray-300"
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/all-blogs-page"
                            className={`text-center select-none px-4 py-2 ${
                                theme === "dark"
                                    ? "text-blue-50 hover:bg-cyan-900"
                                    : "text-gray-900 hover:bg-gray-300"
                            }`}
                        >
                            Blog Pages
                        </Link>
                        <Link
                            to="/add-blog-page/?mode=add"
                            className={`text-center select-none px-4 py-2 ${
                                theme === "dark"
                                    ? "text-blue-50 hover:bg-cyan-900"
                                    : "text-gray-900 hover:bg-gray-300"
                            }`}
                        >
                            Add New Blog
                        </Link>
                        {user ? (
                            <div className="text-center align-middle md:flex-col gap-4 space-y-4 p-1 box-border items-center justify-center">
                                <img
                                    className="w-[60px] h-[60px] rounded-full mx-auto"
                                    src={user.image}
                                    alt="userImage"
                                />
                                <p
                                    className={`font-bold justify-center text-center ${
                                        theme === "dark"
                                            ? "text-amber-200"
                                            : "text-gray-700"
                                    }`}
                                >
                                    welcome {user.name}
                                </p>
                                <Form
                                    method="post"
                                    action="/logout"
                                    id="logout-form"
                                >
                                    <button
                                        className={`px-6 py-1 font-bold rounded-md select-none ${
                                            theme === "dark"
                                                ? "text-white bg-cyan-950 hover:bg-purple-200"
                                                : "text-gray-900 bg-gray-300 hover:bg-gray-400"
                                        }`}
                                    >
                                        Sign Out
                                    </button>
                                </Form>
                            </div>
                        ) : (
                            <Link
                                to="/auth-page?mode=login"
                                className={`px-6 py-1 font-bold rounded-md select-none justify-center w-1/2 mx-auto ${
                                    theme === "dark"
                                        ? "text-white bg-cyan-950 hover:bg-purple-200"
                                        : "text-gray-900 bg-gray-300 hover:bg-gray-400"
                                }`}
                            >
                                Sign In
                            </Link>
                        )}
                    </ul>
                </div>
            </aside>
        </div>
    );
}
