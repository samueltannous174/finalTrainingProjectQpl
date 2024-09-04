import type { MetaFunction } from "@remix-run/node";
import CommentComponent from "~/components/blogPage/CommentComponent";
import {Form} from "@remix-run/react";
import { useState} from "react";

export const meta: MetaFunction = () => {
    return [
        { title: "Comments" },
        { name: "description", content: "Discussion section for comments" },
    ];
};

export default function CommentsSection({blogData}) {

    const [commentContent, setCommentContent] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentContent(event.target.value);
    };
    return (


        <div className="  rounded-lg border p-3 m-10 w-[80%] bg-gray-800">
            <h3 className="font-semibold p-1 text-white">Discussion</h3>
            <div className="w-full px-3 mb-2 mt-6">
                <div className=" bg-gray-800 py-2 px-4 mb-4  rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <textarea
                    value={commentContent}
                    onChange={handleChange}
                    className="bg-gray-800 px-0 w-full text-sm  border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800 text-white"                    name="body"
                    placeholder="Comment"
                    required
                />
                </div>

            </div>

            <Form method="post" className="w-full flex justify-end px-3 my-3">
                <input
                    type="submit"
                    name="content"
                    className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500 cursor-pointer"
                    value="Post Comment"
                />
                <input
                    name="blogID"
                    className="hidden"
                />
                <input
                    name="UserID"
                    className="hidden"

                />
            </Form>
            <CommentComponent/>
        </div>
    );
}
