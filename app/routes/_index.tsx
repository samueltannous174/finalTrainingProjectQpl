 import type { MetaFunction } from "@remix-run/node";
    import '../index.css'
    import Bio from "~/components/landingPage/Bio/Bio";
    import AboutMe from "~/components/landingPage/AboutMe/AboutMe";
 import {useLoaderData} from "react-router";



    export const meta: MetaFunction = () => {
        return [
            { title: "Home" },
            { name: "description", content: "hello" },
        ];
    };

    export default function Index() {


        return (
            <main className="bg-gray-900 h-[2000px]  ">

                <div className="flex flex-col  items-center justify-center " >
                    <div className="mt-[60px]" >
                        <Bio/>
                        <AboutMe/>
                    </div>

                </div>
            </main>
        );
    }


