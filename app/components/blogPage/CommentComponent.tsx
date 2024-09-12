
import {Comment} from "~/types"
import {getUserImage} from "~/components/getUserImage";
type CommentComponentProps={
    commentData:Comment
    key:number
}


export default function CommentComponent({commentData}: CommentComponentProps) {
    let image=null
    if (commentData.author){
         image=getUserImage(commentData.author)
    }
    
    return (
        <div className="flex flex-col gap-5 m-3">
            <div className="flex w-full justify-between rounded-md">
                <div className="p-3">
                    <div className="flex gap-3 items-center">
                        <img
                            src={commentData.authorId? image : "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg" }
                            alt="User 1"
                            className="object-cover  w-10 h-10 rounded-full  border-emerald-400 shadow-emerald-400"
                        />
                        <div>
                            <h3 className="font-bold text-white">
                                {commentData.authorId? commentData.author.name: "Anonymous"}
                            </h3>
                        </div>
                    </div>
                    <p className="text-gray-200 mt-2">
                        {commentData.content}
                    </p>
                    <p className="text-gray-200 mt-2">
                        {commentData.createdAt}
                    </p>
                    <button className="text-right text-blue-500">Reply</button>
                </div>
                <div className="flex flex-col items-end gap-3 pr-3 py-3">
                    <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                    <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

