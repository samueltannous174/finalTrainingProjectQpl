import '../../index.css';
import { Form, useNavigation } from "@remix-run/react";
import { useActionData } from "react-router";
import React from "react";

interface BlogPageProps {
    title: string;
    paragraph: string;
    image: string;
    author: string;
}

interface ValidationErrors {
    title?: string;
    paragraph?: string;
    image?: string;
    author?: string;
}

interface AddFormPageProps {
    blogData: BlogPageProps;
    setBlogData: React.Dispatch<React.SetStateAction<BlogPageProps>>;
    handleFontChange: (newFontType: string) => void;
    fontType: string;
}

// Define the function as a regular function
function AddForm({ blogData, setBlogData, handleFontChange, fontType }: AddFormPageProps) {

    const handleFontTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newFontType = e.target.value;
        handleFontChange(newFontType);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBlogData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validation = useActionData<ValidationErrors>();
    const navigation = useNavigation();
    const isSubmitting = navigation.state !== 'idle';

    return (
        <main draggable="true" className="resizee bg-cyan-900 box-border p-4 max-w-[400px] max-h-full h-full">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-50">Create a New Blog</h1>
            <Form method="post" className="space-y-6 max-h-full">
                <div>
                    <label htmlFor="title" className="block text-lg font-medium text-white">
                        Title
                    </label>
                    <input
                        value={blogData.title}
                        type="text"
                        id="title"
                        name="title"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Enter the post title"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="paragraph" className="block text-lg font-medium text-white">
                        Content
                    </label>
                    <div className="flex-col space-y-5">
                        <textarea
                            value={blogData.paragraph}
                            id="paragraph"
                            name="paragraph"
                            rows={12}
                            className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${fontType}`}
                            placeholder="Write the content of your post..."
                            onChange={handleChange}
                        ></textarea>
                        <select
                            id="font-type"
                            value={fontType}
                            onChange={handleFontTypeChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                            <option value="font-sans">Font Type</option>
                            <option value="font-sans">Sans-serif</option>
                            <option value="font-serif">Serif</option>
                            <option value="font-mono">Monospace</option>
                            <option value="font-bold">Bold</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="image" className="block text-lg font-medium text-white">
                        Image Url
                    </label>
                    <input
                        value={blogData.image}
                        id="image"
                        name="image"
                        accept="image/*"
                        className="mt-1 block w-full text-gray-500 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="author" className="block text-lg font-medium text-white">
                        Author Name
                    </label>
                    <input
                        value={blogData.author}
                        type="text"
                        id="author"
                        name="author"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Enter your name"
                        onChange={handleChange}
                    />
                </div>

                <div className="flex-col flex space-y-2 text-red-500">
                    {validation && Object.values(validation).map((error, index) => (
                        <div key={index}>{error}</div>
                    ))}
                </div>

                <div className="text-center flex space-x-3">
                    <button
                        className="inline-block px-6 py-3 text-white font-medium text-lg rounded-md shadow hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-cyan-950"
                    >
                        Edit Blog
                    </button>
                    <button
                        type="submit"
                        className={`inline-block px-6 py-3 bg-cyan-950 text-white font-medium text-lg rounded-md shadow ${
                            isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'hover:bg-blue-400'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Adding....' : 'Add Blog'}
                    </button>
                </div>
            </Form>
        </main>
    );
}

export default AddForm;
