import {useTheme} from "~/components/ThemeContext/ThemeContext";
import BioPartOne from "~/components/landingPage/Bio/BioPartOne";
import BioPartTwo from "~/components/landingPage/Bio/BioPartTwo";

export default function MyComponent() {
    const { theme } = useTheme();

    return (
        <main
            className={`grid space-x-5 space-y-4 lg:grid-cols-[60%_40%] md:grid-cols-1 mx-auto w-[90%] p-10 box-border ${
                theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-blue-50 text-gray-900'
            }`}
        >
            <BioPartOne/>
            <BioPartTwo/>
        </main>
    );
}
