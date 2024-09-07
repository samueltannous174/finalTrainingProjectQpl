import AuthForm from "~/components/Auth/AuthForm";
import '.././index.css'
import {getUserIdFromSession, login, signup} from "~/server/authData";
import {User} from "~/types";
function AuthPage() {

    return (
        <div className="flex flex-col justify-center gap-4 items-center bg-indigo-950 authForm min-h-screen ">
            <AuthForm/>
        </div>

    );
}


export async function action({request}) {
    const searchParams = new URL(request.url).searchParams;
    const authMode = searchParams.get('mode') || 'login';
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData) as User

    try {
        if (authMode === 'login') {
            return await login(credentials);
        } else {
            return await signup(credentials);
        }
    } catch (error) {
        console.log(error)
            return error.message
    }
}


export default AuthPage;

export function loader({request}) {
    return getUserIdFromSession(request);
}