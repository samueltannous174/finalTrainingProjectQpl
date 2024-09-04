import type { MetaFunction } from "@remix-run/node";
import {Form} from "@remix-run/react";
import  { useState} from "react";
import {useLoaderData} from "react-router";
import {format} from "date-fns";
import CommentComponent from "~/components/blogPage/CommentComponent";

export const meta: MetaFunction = () => {
    return [
        { title: "Comments" },
        { name: "description", content: "Discussion section for comments" },
    ];
};

export default function CommentsSection() {
    const data=useLoaderData()
    const userExists=!!data.user
    const user=data.user
    console.log(user)
    const [createdAt] = useState(format(new Date(), "yyyy-MM-dd' T ' HH:mm:ss"));


    const [commentContent, setCommentContent] = useState("");
    const handleClearingContent= () => {

        setTimeout(() => {
            setCommentContent("");
        }, 2000);
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentContent(event.target.value);
    };
    return (

        <div  className="  rounded-lg border p-3 m-10 w-[80%] bg-gray-800">
            <h3 className="font-semibold p-1 text-white">Discussion</h3>
            <div className="w-full px-3 mb-2 mt-6">

                <Form method="post" className=" bg-gray-800 py-2 px-4 mb-4  rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <textarea
                    value={commentContent}
                    onChange={handleChange}
                    name="content"
                    className="bg-gray-800 px-0 w-full text-sm  border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800 text-white"
                    placeholder="Comment"
                    required
                />

                    <div className="w-full flex justify-end px-3 my-3">
                        <button  className="px-10 py-5 rounded-md text-white text-sm bg-indigo-500 cursor-pointer"
                                 disabled={commentContent=== ""}
                                 onClick={handleClearingContent}
                        >
                            Submit
                        </button>
                    </div>
                    <input
                        value={data.blog.id}
                        name="blogId"
                        className="hidden"
                    />
                    <input
                        value={createdAt}
                        name="createdAt"
                        className="hidden"
                    />
                    <input
                        value={user? user.id: null}
                        name="authorId"
                        className="hidden"
                    />

                </Form>
            </div>
            {data.blog.comments.map((comment)=>{
               return <CommentComponent
                   userExists={userExists}
                   commentData={comment}
                   user={user}
               />
            } )}
        </div>
    );
}
