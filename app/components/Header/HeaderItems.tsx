import { useTheme } from "~/components/ThemeContext/ThemeContext";
import {NavigationItems} from "~/components/Header/NavigationItems";
import {AuthButton} from "~/components/Header/AuthButton";

export default function HeaderItems() {
    const { theme } = useTheme()

    return (
        <>
            <div className={`text-2xl font-bold max-w-[100px] ${theme === 'dark' ? 'bg-[#9cd6f3]' : 'bg-gray-200'} select-none`}>
                <img
                    className="select-none"
                    src="https://www.sam.biz/wp-content/uploads/2023/09/SAM_TM_color_rgb.png"
                    alt="sam"
                />
            </div>
            <nav className={`hidden md:flex space-x-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
            <NavigationItems/>
            </nav>
            <section className="md:flex hidden">
                <AuthButton className={" hidden  md:flex  space-x-3 p-1 box-border items-center justify-center"}/>
            </section>
        </>
    );
}