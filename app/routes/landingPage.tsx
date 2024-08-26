import Header from "~/components/landingPage/Header/Header";
import Bio from "~/components/landingPage/Bio/Bio";
import '../index.css'
import AboutMe from "~/components/landingPage/AboutMe/AboutMe";


export default function LandingPage() {
    return (
        <main className="bg-gray-900 h-[2000px]  ">
            <div className="flex flex-col    items-center justify-center " >
                <div className="w-full fixed boxShadowHeader top-0 bg-gray-900">
                    <Header/>
                </div>
                <div className="mt-[100px]" >
                    <Bio/>
                </div>
                <AboutMe/>
            </div>
        </main>
    );
}
