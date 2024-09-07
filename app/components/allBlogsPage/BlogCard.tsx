import { Link } from "react-router-dom";
import { useNavigate } from "@remix-run/react";
import {useTheme} from "~/components/ThemeContext/ThemeContext";
import {Blog} from "~/types";





interface BlogCardProps {
    blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
    const { theme } = useTheme();
    const authorName = "by " + blog.author.name;

    const navigate = useNavigate();
    const handleNavigateToBlogPage = () => {
        navigate(`/all-blogs-page/${blog.id}`);
    };

    return (
        <button
            className={`grid ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} blogCard lg:grid-cols-2 gap-4`}
            onClick={handleNavigateToBlogPage}>
            <section className={`lg:h-[400px] md:h-[400px] flex flex-col items-center align-middle justify-center p-5 box-border ${theme === 'dark' ? 'bg-gray-700' : 'bg-yellow-50'}`}>
                <img
                    className="w-full xl:w-[90%] h-full rounded-lg object-center"
                    src={blog.image}
                    alt="blogArticle"
                />
            </section>
            <section className={`flex flex-col justify-around items-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-slate-400'} h-[400px]`}>
                <nav className="flex space-x-6">
                    <Link className={`text-blue-50 hover:bg-cyan-900 select-none px-12 py-5 text-xl ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`} to="./">
                        About
                    </Link>
                </nav>
                <div className="flex flex-col space-y-2 items-center">
                    <h1 className={`sm:text-7xl text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        {blog.title}
                    </h1>
                    <p className={` italic font-semibold text-[30px] ${theme === 'dark' ? 'text-cyan-500' : 'text-yellow-400'} `}>
                        {authorName}
                    </p>
                </div>
            </section>
        </button>
    );
}
