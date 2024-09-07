 import type { MetaFunction } from "@remix-run/node";
    import '../index.css'
    import Bio from "~/components/landingPage/Bio/Bio";
    import AboutMe from "~/components/landingPage/AboutMe/AboutMe";
 import Skills from "~/components/landingPage/Skills/Skills";
 import Experience from "~/components/landingPage/Experience/Experience";
 import Footer from "~/components/landingPage/Footer/Footer";
 import {useTheme} from "~/components/ThemeContext/ThemeContext";


    export const meta: MetaFunction = () => {
        return [
            { title: "Home" },
            { name: "description", content: "landing page samuel" },
        ];
    };

    export default function Index() {

        const { theme } = useTheme();
        return (
            <main className={` ${theme === 'dark' ? 'bg-gray-900 ' : 'bg-blue-50 '} `}>
                <div className=" flex flex-col items-center justify-center" >
                        <Bio/>
                        <AboutMe/>
                        <Skills/>
                        <Experience/>
                        <Footer/>
                    </div>
            </main>
        );
    }



