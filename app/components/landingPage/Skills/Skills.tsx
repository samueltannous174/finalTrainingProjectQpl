import SkillsComponent from '~/components/landingPage/Skills/SkillsComponent';
import {useTheme} from "~/components/ThemeContext/ThemeContext";

export default function Skills() {
    const { theme } = useTheme();

    return (
        <div
            className={`mx-auto ${theme === 'dark' ? 'bg-gray-900' : 'bg-blue-50'} w-[90%] pt-[60px] pb-[60px] box-border`}
        >
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className="flex gap-4 justify-center">
                    <button
                        className={`py-3 px-8 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 ${
                            theme === 'dark' ? 'bg-gray-500 text-white focus:ring-gray-300' : 'bg-gray-300 text-gray-800 focus:ring-gray-500'
                        }`}
                    >
                        Skills
                    </button>
                </div>
                <p className={`text-[20px] ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    The skills, tools and technologies I am really good at:
                </p>
                <SkillsComponent />
            </div>
        </div>
    );
}
