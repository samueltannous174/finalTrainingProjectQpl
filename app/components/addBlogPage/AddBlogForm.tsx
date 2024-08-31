import {useNavigation} from "@remix-run/react";

export default function AddBlogForm() {
    const navigation = useNavigation();
    const isSubmitting = navigation.state !== 'idle';

    return (
        <>
                    <div className="flex p-1 box-border">
                        <label htmlFor="image" className="flex-1 block text-md font-medium text-white">
                            Publication Title:
                        </label>
                        <input
                            id="image"
                            name="image"
                            accept="image/*"
                            className=" flex-1 block w-full text-gray-500 px-1 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>

                    <div className="flex p-1 box-border ">
                        <label htmlFor="image" className="flex-1 block text-md font-medium text-white">
                            description Image:
                        </label>
                        <input
                            value="image url"
                            id="image"
                            name="image"
                            accept="image/*"
                            className=" flex-1 block w-full text-gray-500 px-1 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
            <button
                type="submit"
                className={`inline-block w-1/2 px-1 py-1 bg-cyan-950 text-white font-medium text-lg rounded-md shadow ${
                    isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'hover:bg-blue-400'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Adding....' : 'Add Blog'}
            </button>
        </>

    );
}
