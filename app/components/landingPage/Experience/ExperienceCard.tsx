
type Data = {
    title: string;
    description : string[];
    dates:string
};

export default function ExperienceCard({experienceData} : { experienceData: Data }) {
    return (
        <main className="flex justify-around w-[80%] bg-slate-700 p-5 md:p-0  md:space-x-10 rounded-lg flex-wrap">
                <h2 className="text-green-600 md:mt-[10px] ">
                    UPWORK
                </h2>
            <div className="flex flex-col">
                <h1 className="m-0">
                    {experienceData.title}
                </h1>
                <ul className="p-5 box-border">
                    {experienceData.description.map((item, index)=>{
                        return <li key={index} className="text-gray-400 text-[20px] xl:w-[400px] break-words">
                            {item}
                        </li>
                    })}
                </ul>

            </div>
            <p className="text-white ml-0 text-[20px] md:mt-[10px]">
                Nov 2021 - Present
            </p>
        </main>

    );
}


