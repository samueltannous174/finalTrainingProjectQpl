import { useState } from "react";
import {useTheme} from "~/components/ThemeContext/ThemeContext";
import {NavigationItems} from "~/components/Header/NavigationItems";
import {AuthButton} from "~/components/Header/AuthButton";

export default function SideBar() {
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
                        ? " text-gray-50 hover:bg-gray-700 focus:ring-gray-600"
                        : " hover:bg-gray-300 focus:ring-gray-400"
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
                <div className={`h-full px-3 py-4 overflow-y-auto ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
                    <ul className="space-y-10 p-0 font-medium flex-col flex items-center">
                        <div className="flex justify-start w-full">

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
                                    className="w-6 h-6 "
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        className="self-end"
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    />
                                </svg>

                        </button>
                        </div>
                        <NavigationItems/>
                        <AuthButton className="text-center  flex-col gap-4 space-y-4 p-1 box-border items-center justify-center"/>
                    </ul>
                </div>
            </aside>
        </div>
    );
}
