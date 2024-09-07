import {useTheme} from "~/components/ThemeContext/ThemeContext";
import SocialIcons from "~/components/landingPage/Bio/SocialIcons";


export default function BioPartOne() {
    const name =" Hi, I’m Samuel 👋"
    const desc =" I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.\n"
    const city ="Ramallah"
    const availableText=" available for new projects"
    const { theme } = useTheme();


    return (
        <>
            <main className="   flex-col space-y-9  ">
                <section className="flex-col ">
                    <div className="flex space-x-3 md:space-x-20 items-center">
                        <h1   className={`text-4xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} leading-tight mb-4 no-cursor`}
                        >
                            {name}
                        </h1>
                    </div>

                    <p className={`text-lg leading-relaxed no-cursor ${theme === 'dark'? 'text-white' : 'text-gray-900' }  `}>
                        {desc}
                    </p>
                </section>
                <section className=" flex-col space-y-1 ">
                    <div className="flex space-x-3 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path  strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p className="text-sm text-gray-500">
                            {city}
                        </p>
                    </div>
                    <div className="flex space-x-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"  stroke="currentColor" className="size-5 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                        <p className="text-sm text-gray-500">
                            {availableText}
                        </p>
                    </div>
                </section>
                    <SocialIcons/>
            </main>
        </>
    )
}
