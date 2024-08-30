
interface BlogPageProps {
    title: string;
    paragraph: string;
    image: string;
    author: string;
}

interface AddFormPageProps {
    blogData: BlogPageProps;
    fontType?: string;
}

function BlogPage({ blogData, fontType = "" }: AddFormPageProps) {
    return (
        <main className="grid grid-cols-2 box-border w-[90%] mx-auto">
            <section className="flex flex-col space-y-2 p-10">
                <h1 className="text-5xl font-extrabold text-white text-center my-6">
                    {blogData.title}
                </h1>
                <p className="text-right text-cyan-500 italic font-semibold">
                    By {blogData.author}
                </p>
                <p className={`text-lg text-gray-400 leading-relaxed mb-4 ${fontType}`}>
                    {blogData.paragraph}
                </p>
            </section>
            <section className="box-border p-20">
                <img
                    src={blogData.image}
                    alt={` for ${blogData.title}`}
                />
            </section>

        </main>
    );
}

export default BlogPage;
