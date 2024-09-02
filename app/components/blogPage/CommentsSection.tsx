import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Comments" },
        { name: "description", content: "Discussion section for comments" },
    ];
};

export default function CommentsSection() {
    return (

        <div className="  rounded-lg border p-3 m-10 w-[80%] bg-gray-800">
            <h3 className="font-semibold p-1 text-white">Discussion</h3>
            <div className="w-full px-3 mb-2 mt-6">
                <div className=" bg-gray-800 py-2 px-4 mb-4  rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <textarea
                    className="bg-gray-800 px-0 w-full text-sm  border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800 text-white"                    name="body"
                    placeholder="Comment"
                    required
                />
                </div>

            </div>

            <div className="w-full flex justify-end px-3 my-3">
                <input
                    type="submit"
                    className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500 cursor-pointer"
                    value="Post Comment"
                />
            </div>
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
                                    <span className="text-sm text-gray-400 font-normal block">Level 1</span>
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

                {/* reply */}
                <div className="text-gray-300 font-bold pl-14">|</div>

                {/* Comment 2 */}
                <div className="flex w-full justify-between  ml-5 rounded-md">
                    <div className="p-3">
                        <div className="flex gap-3 items-center">
                            <img
                                src="https://avatars.githubusercontent.com/u/22263436?v=4"
                                alt="User 2"
                                className="object-cover w-10 h-10 rounded-full border-2 border-emerald-400 shadow-emerald-400"
                            />
                            <div>
                                <h3 className="font-bold text-white">
                                    User 2
                                    <span className="text-sm text-gray-400 font-normal block">Level 1</span>
                                </h3>
                            </div>
                        </div>
                        <p className="text-gray-600 mt-2">
                            This is a sample comment
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 pr-3 py-3">
                        <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                        <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>

                {/* Divider */}

                <div className="text-gray-300 font-bold pl-14">|</div>

                {/* Comment 3 */}
                <div className="flex w-full justify-between ml-5 rounded-md">
                    <div className="p-3">
                        <div className="flex gap-3 items-center">
                            <img
                                src="https://avatars.githubusercontent.com/u/22263436?v=4"
                                alt="User 3"
                                className="object-cover w-10 h-10 rounded-full border-2 border-emerald-400 shadow-emerald-400"
                            />
                            <div>
                                <h3 className="font-bold text-white">
                                    User 3
                                    <span className="text-sm text-gray-400 font-normal block">Level 1</span>
                                </h3>
                            </div>
                        </div>
                        <p className="text-gray-600 mt-2">
                            This is a sample comment
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 pr-3 py-3">
                        <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                        <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>

                {/* Comment 4 */}
                {/*<div className="flex w-full justify-between border rounded-md">*/}
                {/*    <div className="p-3">*/}
                {/*        <div className="flex gap-3 items-center">*/}
                {/*            <img*/}
                {/*                src="https://avatars.githubusercontent.com/u/22263436?v=4"*/}
                {/*                alt="User 4"*/}
                {/*                className="object-cover w-10 h-10 rounded-full border-2 border-emerald-400 shadow-emerald-400"*/}
                {/*            />*/}
                {/*            <div>*/}
                {/*                <h3 className="font-bold">*/}
                {/*                    User 4*/}
                {/*                    <span className="text-sm text-gray-400 font-normal block">Level 1</span>*/}
                {/*                </h3>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <p className="text-gray-600 mt-2">*/}
                {/*            This is a sample comment*/}
                {/*        </p>*/}
                {/*        <button className="text-right text-blue-500">Reply</button>*/}
                {/*    </div>*/}
                {/*    <div className="flex flex-col gap-3 p-3">*/}
                {/*        <div>*/}
                {/*            <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">*/}
                {/*                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />*/}
                {/*            </svg>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">*/}
                {/*                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />*/}
                {/*            </svg>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>


        </div>
    );
}
