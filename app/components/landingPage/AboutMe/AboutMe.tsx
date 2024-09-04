import AboutMePartTwo from "~/components/landingPage/AboutMe/AboutMePartTwo";
import AboutMePartOne from "~/components/landingPage/AboutMe/AboutMePartOne";

export default function AboutMe() {

    return (
        <main className="bg-gray-800 flex flex-col h-[900px]  mt-[20px] pt-10 ">
            <div className="flex  justify-center">
                <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
                    About Me
                </button>

            </div>
            <div className=" w-[90%] md:grid grid-cols-2 mx-auto  h-full">
                <AboutMePartOne/>
                <AboutMePartTwo/>
            </div>

        </main>
    );
}