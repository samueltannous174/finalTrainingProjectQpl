import AuthForm from "~/components/Auth/AuthForm";
import '.././index.css'
import {getUserIdFromSession, login, signup} from "~/server/authData";
import { MetaFunction, } from "@remix-run/node";

function AuthPage() {

    return (
        <div className="flex flex-col justify-center gap-4 items-center bg-indigo-950 authForm min-h-screen ">
            <AuthForm/>
        </div>

    );
}

export function loader({request}) {
    return getUserIdFromSession(request);
}

export async function action({ request }) {
    const searchParams = new URL(request.url).searchParams;
    const authMode = searchParams.get('mode') || 'login';
    const formData = await request.formData();
    const email = formData.get('email');
    console.log(email)
    const password = formData.get('password');
    console.log(password)
    const name = formData.get('name');

    try {
        if (authMode === 'login') {
            return await login(email, password)
        } else {
           return  await signup(email,name,password)
        }
    } catch (error) {
        console.error(error.message);
        return error.message
    }
}

export const meta: MetaFunction = () => {
    return [
        { title: "Authentication Page " },
        { name: "description", content: " Join Us For Free" },
    ];
}

export default AuthPage;

