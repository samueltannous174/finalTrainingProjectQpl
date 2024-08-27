
export default function BlogPage() {
    return (
        <main className="grid-cols-2 grid  box-border w-[90%] mx-auto ">
            <section className=" flex flex-col space-y-2 p-10 ">
                <h1 className="text-5xl font-extrabold text-white text-center my-6 no-cursor ">
                    Sports
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    It’s hard not to spend time gazing through the photos of this family and lifestyle photographer’s website. Eric Etchart manages to capture both simple, everyday moments of family life, from a child looking at a ladybug, to bigger, more momentous occasions, such as weddings. His use of lighting, focus and color tells a complete story within each image.
                    His blog has a white background, allowing each professional thumbnail image to stand out and grab readers’ attention. Each post describes a photo shoot, including the subject and location of the session, which provides readers a behind the scenes look into the work of a  professional photographer.
                </p>
            </section>
            <section className="box-border p-20">
                <img src="https://cdn.nwscdn.com/media/wysiwyg/3kf/tennis/Lifestyle.jpg" alt="desc"/>
            </section>
        </main>
    );
}