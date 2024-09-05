import BlogsContainer from "../components/allBlogsPage/blogsContainer";
import { getBlogs } from "~/server/dataBaseData";
import { json } from "@remix-run/node";
import {useTheme} from "~/components/ThemeContext/ThemeContext";

export default function AllBlogsPage() {
    const { theme } = useTheme();

    return (
        <div className={`min-w-[420px] ${theme === 'dark' ? 'bg-[#020b21]' : 'bg-blue-100'}`}>
            <BlogsContainer />
        </div>
    );
}

export async function loader() {
    const blogs = await getBlogs();
    return json(blogs);
}
