import '../../index.css';

export default function AddForm() {


    return (
        <main draggable="true" className="resizee bg-cyan-900  box-border p-4 max-w-[400px] ">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-50">Create a New Blog</h1>
            <form method="post" className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-lg font-medium text-gray-900">
                        Post Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Enter the post title"
                    />
                </div>

                <div>
                    <label htmlFor="paragraph" className="block text-lg font-medium text-gray-900">
                        Content
                    </label>
                    <textarea
                        id="paragraph"
                        name="paragraph"
                        rows={4}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Write the content of your post..."
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="image" className="block text-lg font-medium text-gray-900">
                        Upload Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        className="mt-1 block w-full text-gray-500 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="author" className="block text-lg font-medium text-gray-900">
                        Author Name
                    </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="inline-block px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Submit Post
                    </button>
                </div>
            </form>
        </main>
    );
}
