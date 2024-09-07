import AboutMePartTwo from "~/components/landingPage/AboutMe/AboutMePartTwo";
import AboutMePartOne from "~/components/landingPage/AboutMe/AboutMePartOne";
import {useTheme} from "~/components/ThemeContext/ThemeContext";

export default function AboutMe() {
    const { theme } = useTheme();


    return (
        <main  className={`flex flex-col justify-center mt-[20px] pt-10 pb-10 ${
            theme === 'dark' ? 'bg-slate-800' : 'bg-slate-50'}`}>
            <div className="flex  justify-center">
                <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
                    About Me
                </button>
            </div>
            <div className=" w-[90%] grid grid-cols-1 lg:grid-cols-2 mx-auto align-middle h-full">
                <AboutMePartOne/>
                <AboutMePartTwo/>
            </div>
        </main>
    );
}