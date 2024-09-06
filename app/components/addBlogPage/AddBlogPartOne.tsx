import AddBlogForm from "~/components/addBlogPage/AddBlogForm";
import QuillComponent from "~/components/addBlogPage/quillEditor/QuillComponent";
interface Props {
    content: string
}


export  function AddBlogPartOne({content} : Props){
        return  <section className=" flex flex-col bg-sky-900 items-center space-y-1 justify-center md:fixed ">
            <AddBlogForm content={content}/>
            <div className=" bg-sky-900 flex justify-center  ">
                <QuillComponent  />
            </div>
        </section>
}