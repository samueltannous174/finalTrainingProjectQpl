    import {useEffect} from 'react'
    import {useQuill} from "react-quilljs";

    interface Props{
        defaultValue?: string
        setContent: (content:string) => void;
    }

    export default function Quill ({ defaultValue, setContent }: Props) {
        const { quill, quillRef } = useQuill()
        useEffect(() => {
            if (quill && defaultValue) {
                quill.clipboard.dangerouslyPasteHTML(defaultValue)
                quill.on('text-change', () => {
                    const newContent = quill.root.innerHTML;
                    setContent(newContent);
                  setContent(newContent)
                });
            }
        }, [quill,defaultValue])

        return (
            <div className="bg-cyan-550  w-[300px] lg:w-[400px] xl:w-[600px] m-d" style={{  height: 700 }}>
                <div  ref={quillRef} />
            </div>
        )
    }



