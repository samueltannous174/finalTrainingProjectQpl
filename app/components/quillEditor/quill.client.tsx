    import {useEffect} from 'react'
    import { useQuill } from 'react-quilljs'


    interface Props{
        defaultValue?: string
        setContent: (content:string) => void;
    }

    export default function Quill({ defaultValue, setContent }: Props) {
        const { quill, quillRef } = useQuill()


        useEffect(() => {
            if (quill && defaultValue) {
                quill.clipboard.dangerouslyPasteHTML(defaultValue)
                quill.on('text-change', () => {
                    const newContent = quill.root.innerHTML;
                    setContent(newContent);
                    console.log(newContent)
                  setContent(newContent)
                });
            }
        }, [quill,defaultValue])

        return (
            <div className="bg-cyan-550  md:w-[300px] xl:w-[500px]" style={{  height: 700 }}>
                <div  ref={quillRef} />
            </div>
        )
    }
