import BioPartOne from "~/components/landingPage/Bio/BioPartOne";
import BioPartTwo from "~/components/landingPage/Bio/BioPartTwo";
export default function Bio() {
    return (
        <main className ="grid space-x-5 space-y-4 lg:grid-cols-[60%_40%] md: grid-cols-1  mx-auto w-[90%]  ">
            <BioPartOne/>
            <BioPartTwo/>
        </main>
    )
}
