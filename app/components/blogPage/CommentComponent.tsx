

export default function CommentComponent() {
    // const comments= useLoaderData()
    // console.log(comments)
    return (

        <div className="flex flex-col gap-5 m-3">
            <div className="flex w-full justify-between rounded-md">
                <div className="p-3">
                    <div className="flex gap-3 items-center">
                        <img
                            src="https://avatars.githubusercontent.com/u/22263436?v=4"
                            alt="User 1"
                            className="object-cover  w-10 h-10 rounded-full  border-emerald-400 shadow-emerald-400"
                        />
                        <div>
                            <h3 className="font-bold text-white">
                                User 1
                            </h3>
                        </div>
                    </div>
                    <p className="text-gray-600 mt-2">
                        This is a sample comment
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

