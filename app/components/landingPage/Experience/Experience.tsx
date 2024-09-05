import ExperienceCard from "~/components/landingPage/Experience/ExperienceCard";

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
    return (
        <main className="flex flex-col  p-10 bg-slate-800 items-center space-y-10">
            <div className="flex justify-center ">
                <button className="bg-gray-500 text-white py-3 px-8 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
                    Experience
                </button>
            </div>

            <p className="text-white text-[20px]">
                    Here is a quick summary of my most recent experiences:
                </p>
            {experienceData.map((experience)=>{
              return <ExperienceCard experienceData={experience} />
            })}
        </main>

    );
}


