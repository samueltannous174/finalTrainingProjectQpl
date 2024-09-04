import SkillsComponent from "~/components/landingPage/Skills/SkillsComponent";

export default function Skills() {
    return (
        <main>
        <div className="bg-gray-900 mx-auto w-[90%]  pt-[60px]  pb-[60px] box-border ">
            <div className="flex flex-col gap-4 justify-center items-center ">
                <div className="flex gap-4 justify-center">
                    <button className="bg-gray-500 text-white py-3 px-8 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
                        Skills
                    </button>
                </div>
                <p className="text-white text-[20px] ">
                    The skills, tools and technologies I am really good at:
                </p>
                <SkillsComponent/>
            </div>
        </div>
        </main>

    );
}


