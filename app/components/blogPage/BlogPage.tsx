import HtmlRenderer from "~/components/addBlogPage/quillEditor/HtmlRenderer";
import {
    useSearchParams
} from '@remix-run/react';
import CommentsSection from "~/components/blogPage/CommentsSection";
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
    const [searchParams] = useSearchParams();
    const mode = searchParams.get('mode');


    return (
        <main className="flex box-border  mx-auto justify-center md:justify-start">
            <section className="flex flex-col space-y-2 p-4 md:p-0 ">
                {mode === 'add' ? (
                    <p className={`text-lg text-black-400 leading-relaxed mb-4 break-words flex-wrap max-w-[268px] lg:max-w-[368px] xl:max-w-[568px] text-[13px] md:max-w-[268px]`}>
                        <HtmlRenderer htmlString={content} />
                    </p>
                ) : (
                    <>
                    <p className={`text-lg leading-relaxed mb-4 break-words flex-wrap w-[50%] text-[13px] self-center mt-[60px]`}>
                        <HtmlRenderer htmlString={blogData.paragraph} />
                    </p>
                        <div className="flex justify-center">
                            <CommentsSection/>
                        </div>
                    </>
                )}
            </section>


        </main>
    );
}

export default BlogPage;
