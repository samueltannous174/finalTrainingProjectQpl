import {Link} from "react-router-dom";

export default function HeaderDesktop() {
    return (<>
        <div className="text-2xl font-bold text-gray-800 max-w-[100px] bg-[#9cd6f3] select-none">
            <img className="select-none" src="https://www.sam.biz/wp-content/uploads/2023/09/SAM_TM_color_rgb.png"  alt="sam"/>
        </div>
        <nav className="hidden md:flex space-x-6 ">
            <Link to="/" className=" text-blue-50 hover:bg-cyan-900 select-none px-4 py-2">Home</Link>
            <Link to="/landingPage" className=" text-blue-50 hover:bg-cyan-900 select-none px-4 py-2">About Me</Link>
            <Link to="/allBlogs" className=" text-blue-50 hover:bg-cyan-900 select-none px-4 py-2">Blog Pages</Link>
            <Link to="/addBlog" className=" text-blue-50 hover:bg-cyan-900 select-none px-4 py-2">Add New Blog</Link>
        </nav>
        <div>
            <button className="px-6 py-1 text-white bg-cyan-950 font-bold rounded-md hover:bg-purple-300 select-none">
                Login </button>
        </div>
    </>)
}


