import {useTheme} from "~/components/ThemeContext/ThemeContext";


type Data = {
    title: string;
    description: string[];
    dates: string;
};

export default function ExperienceCard({ experienceData }: { experienceData: Data }) {
    const { theme } = useTheme();

    return (
        <main
            className={`flex justify-around w-[80%] p-5 md:p-0 md:space-x-10 rounded-lg flex-wrap ${
                theme === 'dark' ? 'bg-slate-700 text-white' : 'bg-gray-100 text-gray-900'
            }`}
        >
            <h2 className={`text-${theme === 'dark' ? 'green-400' : 'green-600'} md:mt-[10px]`}>
                UPWORK
            </h2>
            <div className="flex flex-col">
                <h1 className="m-0">
                    {experienceData.title}
                </h1>
                <ul className="p-5 box-border">
                    {experienceData.description.map((item, index) => (
                        <li
                            key={index}
                            className={`text-${theme === 'dark' ? 'gray-400' : 'gray-700'} text-[20px] xl:w-[400px] break-words`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <p className={`text-${theme === 'dark' ? 'white' : 'gray-900'} ml-0 text-[20px] md:mt-[10px]`}>
                {experienceData.dates}
            </p>
        </main>
    );
}
