import {Form} from "@remix-run/react";
import {Link} from "react-router-dom";
import {useLoaderData} from "react-router";
import {useTheme} from "~/components/ThemeContext/ThemeContext";


interface AuthButtonProps {
    className: string;
}
export function AuthButton ({className} : AuthButtonProps){
    const {user} =useLoaderData()
    const theme =useTheme()

 return <main>
     {user ? (
         <div className={className}>
             <img
                 className="w-[45px] h-[45px] rounded-full mx-auto object-cover"
                 src={user.image}
                 alt="userImage"
             />
             <p className={`font-bold justify-center text-center ${theme === "dark" ? "text-yellow-700" : "text-yellow-600"}`}>
                 welcome {user.name}
             </p>
             <Form
                 method="post"
                 action="/logout"
                 id="logout-form"
             >
                 <button className={`self-center px-6 py-1 font-bold rounded-md select-none ${theme === "dark" ? "text-white bg-cyan-950 hover:bg-purple-200" : "text-gray-900 bg-gray-300 hover:bg-gray-400"}`}>
                     Sign Out
                 </button>
             </Form>
         </div>
     ) : (
         <Link to="/auth-page?mode=login" className={` px-6 py-1 font-bold rounded-md select-none justify-center w-1/2 mx-auto ${theme === "dark" ? "text-white bg-cyan-950 hover:bg-purple-200" : "text-gray-900 bg-gray-300 hover:bg-gray-400"}`}>
             Sign In
         </Link>
     )}
 </main>
}