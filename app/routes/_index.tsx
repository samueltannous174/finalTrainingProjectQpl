 import type { MetaFunction } from "@remix-run/node";
    import '../index.css'
    import Bio from "~/components/landingPage/Bio/Bio";
    import AboutMe from "~/components/landingPage/AboutMe/AboutMe";
 import Skills from "~/components/landingPage/Skills/Skills";
 import Experience from "~/components/landingPage/Experience/Experience";
 import Footer from "~/components/landingPage/Footer/Footer";



    export const meta: MetaFunction = () => {
        return [
            { title: "Home" },
            { name: "description", content: "hello" },
        ];
    };

    export default function Index() {


        return (
            <main className="bg-gray-900 ">

                <div className="flex flex-col items-center justify-center " >
                    <div className="mt-[60px]" >
                        <Bio/>
                        <AboutMe/>
                        <Skills/>
                        <Experience/>
                        <Footer/>
                    </div>
                </div>
            </main>
        );
    }


