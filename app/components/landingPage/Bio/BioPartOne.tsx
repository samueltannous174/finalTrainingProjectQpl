
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";


export default function BioPartOne() {
    const name =" Hello, I'm Samuel\n"
    const desc =" I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.\n"
    const city ="Ramallah"
    const availableText=" available for new projects"

    return (
        <>
            <main className="   flex-col space-y-9  ">
                <section className="flex-col ">
                    <div className="flex space-x-20 items-center ">
                        <h1 className="text-4xl font-extrabold text-white leading-tight mb-4 no-cursor ">
                            {name}
                        </h1>
                        <MdWavingHand color="yellow"  size={50}/>
                    </div>

                    <p className="text-lg text-white leading-relaxed no-cursor">
                        {desc}
                    </p>
                </section>
                <section className=" flex-col">
                    <div className="flex space-x-3 items-center">
                        <CiLocationOn className="text-sm text-white leading-relaxed"/>
                        <p className="text-sm text-white">
                            {city}
                        </p>
                    </div>
                    <div className="flex space-x-3 items-center">
                        <MdOutlineNotificationsActive className="text-sm text-white leading-relaxed"/>
                        <p className="text-sm text-white">
                            {availableText}
                        </p>
                    </div>
                </section>
                <section className="flex space-x-4">
                    <FaGithub className="text-lg text-white"/>
                    <FaTwitter className="text-lg text-white"/>
                    <FaLinkedin className="text-lg text-white"/>
                </section>
            </main>
        </>
    )
}
