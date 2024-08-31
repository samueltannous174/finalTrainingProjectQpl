import HtmlRenderer from "~/components/quillEditor/HtmlRenderer";

interface BlogPageProps {
    title: string;
    paragraph: string;
    image: string;
    author: string;
}

interface AddFormPageProps {
    blogData: BlogPageProps;
    content: string;
}

function BlogPage({ blogData, content  }: AddFormPageProps) {
    return (
        <main className="flex box-border  mx-auto  justify-items-start  ">
            <section className="flex flex-col space-y-2 p-4 md:p-0   ">

                {/*<h1 className="text-5xl font-extrabold text-white text-center my-6">*/}
                {/*    {blogData.title}*/}
                {/*</h1>*/}
                {/*<p className="text-right text-cyan-500 italic font-semibold">*/}
                {/*    By {blogData.author}*/}
                {/*</p>*/}
                <p className={`text-lg  text-black-400 leading-relaxed mb-4 break-words  flex-wrap  max-w-[268px] lg:max-w-[268px] xl:max-w-[468px] text-[13px]  md:max-w-[268px]`}>
                    <HtmlRenderer htmlString={content} />
                    </p>
            </section>


        </main>
    );
}

export default BlogPage;
