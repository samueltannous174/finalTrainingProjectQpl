import HtmlRenderer from "~/components/addBlogPage/quillEditor/HtmlRenderer";
import '../../index.css'
import {Blog} from '~/types'
import {
    useSearchParams
} from '@remix-run/react';
import CommentsSection from "~/components/blogPage/CommentsSection";
import { ClientOnly } from 'remix-utils/client-only';


interface BlogPageProps {
    blogData?: Blog;
    content: string   ;
}

function BlogPage({ blogData, content  }: BlogPageProps) {
    const [searchParams] = useSearchParams();
    const mode = searchParams.get('mode');
    return (
        <main className="box-border mx-auto flex flex-col min-h-screen items-start">
            <section className="flex flex-col  p-4 md:p-0 mx-auto md:mx-0">
                {mode === 'add' ? (
                    <p className={`text-lg text-black-400 leading-relaxed mb-4 break-words flex-wrap max-w-[298px] lg:max-w-[398px] xl:max-w-[598px] text-[13px] md:max-w-[298px]`}>
                        <ClientOnly>
                                {() =><HtmlRenderer htmlString={content}/>}
                        </ClientOnly>
                    </p>
                ) : (
                    <>
                    <p className={`text-lg leading-relaxed mb-4 break-words flex-wrap p-0 w-[70%] lg:w-[50%] text-[13px] self-center mt-[80px]  `}>
                        <ClientOnly>
                            {() => !(blogData) || blogData.paragraph && <HtmlRenderer htmlString={blogData.paragraph}/>}
                        </ClientOnly>

                    </p>
                        <div className="flex justify-center mt-[50px]">
                            <CommentsSection />
                        </div>
                    </>
                )}
            </section>


        </main>
    );
}

export default BlogPage;
