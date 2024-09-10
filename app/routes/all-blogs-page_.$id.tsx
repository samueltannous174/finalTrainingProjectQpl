import {useLoaderData} from "react-router";
import BlogPage from "~/components/blogPage/BlogPage";
import {addComment, getBlogsById, getUserById} from "~/server/dataBaseData";
import {json, MetaFunction} from "@remix-run/node";
import {useTheme} from "~/components/ThemeContext/ThemeContext";
import {getUserIdFromSession} from "~/server/authData";


export default function AllBlogsPageId() {
    const data=useLoaderData()
    const { theme } = useTheme();

    return (
        <main className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-blue-50'} `}>
            <BlogPage blogData={data.blog} content=""/>
        </main>
    );
}
export async function loader({ params, request }) {
    const blog = await getBlogsById(params.id);
    const currentLoggedUserId = await getUserIdFromSession(request);
        if (currentLoggedUserId){
            const userIdInt = parseInt(currentLoggedUserId, 10);
            const user = await getUserById(userIdInt);

            return json({ blog, user });
        }
    return json({ blog });
}


export const action = async ({ request }: { request: Request }) => {
    const commentFormData = await request.formData();
    const commentsData = Object.fromEntries(commentFormData)
    const updatedComment = {
        ...commentsData,
        blogId: parseInt(commentsData.blogId as string, 10),
        authorId: parseInt(commentsData.authorId as string, 10)
    }
    await  addComment(updatedComment)
    return json({ message: ' successfully ' }, { status: 200 });

};
export const meta: MetaFunction = (meta) => {
    return [
        { title: meta.data.blog.title },
        { name: "description", content: "blog page details" },
    ];
};

export const handle = { disableJS: true };