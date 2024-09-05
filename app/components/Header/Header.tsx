import HeaderItems from "~/components/Header/HeaderItems";
import SideBar from "./SideBar";
import { useTheme } from '../ThemeContext/ThemeContext';


export default function Header() {
    const { theme } = useTheme();

    return (
        <div       className={`w-full fixed top-0 z-10 ${theme === 'dark' ? 'bg-gray-900 box-shadow-header text-gray-100' : 'bg-blue-50 box-shadow-header text-gray-800'}`}
        >
        <header className={`${
            theme === 'dark' ? 'bg-gray-900 shadow-gray-900' : 'bg-blue-50  shadow-black-900'
        } w-[90%] mx-auto`}>
            <main className=" flex justify-between items-center ">
                <HeaderItems/>
                <SideBar/>
            </main>
        </header>
        </div>
    );
}



