import HeaderDesktop from "~/components/landingPage/Header/HeaderDesktop";
import HeaderMobile from "~/components/landingPage/Header/HeaderMobile";

export default function Header() {

    return (
        <header className="bg-gray-900 shadow-gray-900 w-[90%] mx-auto ">
            <main className=" flex justify-between items-center ">
                <HeaderDesktop/>
                <HeaderMobile/>
            </main>
        </header>
    );
}
