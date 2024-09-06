import ExperienceCard from '~/components/landingPage/Experience/ExperienceCard';
import {useTheme} from "~/components/ThemeContext/ThemeContext";
import {experienceData} from './ExperienceData'


export default function Experience() {
    const { theme } = useTheme();


    return (

        <main className={`flex flex-col mx-auto pt-10 pb-10 items-center space-y-10 w-full ${
                theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-50 text-gray-900'}`}>

            <div className="flex justify-center">
                <button className={`py-3 px-8 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-gray-500 text-white focus:ring-gray-300' : 'bg-gray-300 text-gray-800 focus:ring-gray-500'}`}>
                    Experience
                </button>
            </div>
            <p className="text-[20px] p-5 ">
                Here is a quick summary of my most recent experiences:
            </p>
            {experienceData.map((experience, index) => (
                <ExperienceCard key={index} experienceData={experience} />
            ))}

        </main>
    );
}
