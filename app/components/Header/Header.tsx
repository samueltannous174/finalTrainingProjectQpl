import HeaderItems from "~/components/Header/HeaderItems";
import SideBar from "./SideBar";


export default function Header() {

    return (
        <header className="bg-gray-900 shadow-gray-900 w-[90%] mx-auto  ">
            <main className=" flex justify-between items-center ">
                <HeaderItems/>
                <SideBar/>
            </main>
        </header>
    );
}



