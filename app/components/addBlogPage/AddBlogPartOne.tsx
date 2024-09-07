import AddBlogForm from "~/components/addBlogPage/AddBlogForm";
import QuillComponent from "~/components/addBlogPage/quillEditor/QuillComponent";
import {useMemo, useState} from "react";

interface Props {
    content: string;
    setContent: (content: string) => void;
}

export function AddBlogPartOne({ content, setContent }: Props) {
    const [addFormClicked, setIsAddFormClicked] = useState(false); // check if addForm button is clicked to have the final content value and  prevent the Form from rendering each time content change
    const MemoizedAddBlogForm = useMemo(() => <AddBlogForm setIsAddFormClicked={setIsAddFormClicked} content={content} />, [addFormClicked]);

    return (
            <section className="flex flex-col bg-sky-900 items-center space-y-1 justify-center md:fixed">
                {MemoizedAddBlogForm}
                <div className="bg-sky-900 flex justify-center">
                    <QuillComponent setContent={setContent} />
                </div>
            </section>
    );
}
