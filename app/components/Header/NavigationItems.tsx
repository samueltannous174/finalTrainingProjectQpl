import {Link} from "react-router-dom";
import ThemeToggle from "~/components/Header/ThemeToggleIcon";
import {useTheme} from "~/components/ThemeContext/ThemeContext";

export function NavigationItems(){
    const { theme } = useTheme();


    return <>
        <Link to="/" className={`self-center hover:bg-cyan-900 select-none px-4 py-2 text-justify ${theme === 'dark' ? 'text-blue-200' : 'text-blue-400'}`}>
            Home
        </Link>
        <Link to="/all-blogs-page" className={`self-center hover:bg-cyan-900 select-none px-4 py-2 text-justify ${theme === 'dark' ? 'text-blue-200' : 'text-blue-400'}`}>
            Blog Pages
        </Link>
        <Link to="/add-blog-page/?mode=add" className={`self-center hover:bg-cyan-900 select-none px-4 py-2 ${theme === 'dark' ? 'text-blue-200' : 'text-blue-400'}`}>
            Add New Blog
        </Link>
        <ThemeToggle />
        </>

}