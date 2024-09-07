import BlogsContainer from "../components/allBlogsPage/blogsContainer";
import { getBlogs } from "~/server/dataBaseData";
import { json } from "@remix-run/node";
import {useTheme} from "~/components/ThemeContext/ThemeContext";
import {isRouteErrorResponse, useRouteError} from "@remix-run/react";

export default function AllBlogsPage() {
    const { theme } = useTheme();

    return (
        <main className={`min-w-[420px] ${theme === 'dark' ? 'bg-[#020b21]' : 'bg-blue-100'} mt-[40px]`}>
            <BlogsContainer />
        </main>
    );
}

export async function loader() {
    const blogs = await getBlogs();

    if (blogs.length === 0) {
        throw json(
            { message: "no blog to show" },
            { status: 400 }
        );    }
    return json(blogs);
}
export function ErrorBoundary() {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        return (
            <div className="mt-[80px]">
                <h1>Oops!</h1>
                <h1>{error.status}</h1>
                <h1>{error.statusText}</h1>
                {error.data?.message && <h1>{error.data.message}</h1>}
            </div>
        );
    } else {
        return <div>Oops</div>;
    }
}
