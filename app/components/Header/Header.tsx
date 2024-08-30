import HeaderItems from "~/components/Header/HeaderItems";
import HeaderMobileAdditions from "~/components/Header/HeaderMobileAdditions";

export default function Header() {

    return (
        <header className="bg-gray-900 shadow-gray-900 w-[90%] mx-auto  ">
            <main className=" flex justify-between items-center ">
                <HeaderItems/>
                <HeaderMobileAdditions/>
            </main>
        </header>
    );
}
