
import Header from "~/components/landingPage/Header/Header";
import {useLoaderData} from "react-router";
import {getBlogs} from "~/server/data";


export default function AllBlogs() {
    const blogs = useLoaderData();
    if (blogs){
        console.log(blogs)
    }

    return (
        <>
            <div className="w-full fixed boxShadowHeader top-0 bg-gray-900 z-10">
                <Header/>
            </div>
        </>
    );
}
export function loader() {
    return getBlogs();
}
