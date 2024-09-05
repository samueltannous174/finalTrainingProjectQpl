import ExperienceCard from '~/components/landingPage/Experience/ExperienceCard';
import {useTheme} from "~/components/ThemeContext/ThemeContext";

const experienceData = [
    {
        title: "Sr. Frontend Developer",
        dates: "Nov 2021 – Present",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Ut pretium arcu et massa semper, id fringilla leo semper.",
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ]
    },
    {
        title: "Team Lead",
        dates: "Jul 2017 – Oct 2021",
        description: [
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ]
    },
    {
        title: "Full Stack Developer",
        dates: "Dec 2015 – May 2017",
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ]
    }
];

export default function Experience() {
    const { theme } = useTheme();

    return (
        <main
            className={`flex flex-col p-10 items-center space-y-10 ${
                theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-50 text-gray-900'
            }`}
        >
            <div className="flex justify-center">
                <button
                    className={`py-3 px-8 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 ${
                        theme === 'dark'
                            ? 'bg-gray-500 text-white focus:ring-gray-300'
                            : 'bg-gray-300 text-gray-800 focus:ring-gray-500'
                    }`}
                >
                    Experience
                </button>
            </div>

            <p className="text-[20px]">
                Here is a quick summary of my most recent experiences:
            </p>
            {experienceData.map((experience, index) => (
                <ExperienceCard key={index} experienceData={experience} />
            ))}
        </main>
    );
}
