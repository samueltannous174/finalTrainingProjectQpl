import HtmlRenderer from "~/components/addBlogPage/quillEditor/HtmlRenderer";
import '../../index.css'
import {
    useSearchParams
} from '@remix-run/react';
import CommentsSection from "~/components/blogPage/CommentsSection";


type User={
    id:number;
    email:string;
    password:string;
    name:string;
    image:string;
}
type Comment={
    content: string;
    createdAt: number;
    blogId: number;
    authorId:number;
}

interface Blog {
    title: string;
    paragraph: string;
    image: string;
    authorId: number;
    author:User;
    comment: Comment
}

interface BlogPageProps {
    blogData?: Blog;
    content?: string;
}

function BlogPage({ blogData, content  }: BlogPageProps) {
    console.log(blogData)
    const [searchParams] = useSearchParams();
    const mode = searchParams.get('mode');
    return (
        <main className="flex box-border mx-auto justify-center md:justify-start  ">
            <section className="flex flex-col space-y-2 p-4 md:p-0 ">
                {mode === 'add' ? (
                    <p className={`text-lg text-black-400 leading-relaxed mb-4 break-words flex-wrap max-w-[268px] lg:max-w-[368px] xl:max-w-[568px] text-[13px] md:max-w-[268px]`}>
                        {content && <HtmlRenderer htmlString={content}/>}
                    </p>
                ) : (
                    <>
                    <p className={`text-lg leading-relaxed mb-4 break-words flex-wrap w-[50%] text-[13px] self-center mt-[60px]`}>
                        {!(blogData) || blogData.paragraph && <HtmlRenderer htmlString={blogData.paragraph}/>}
                    </p>
                        <div className="flex justify-center">
                            <CommentsSection />
                        </div>
                    </>
                )}
            </section>


        </main>
    );
}

export default BlogPage;
