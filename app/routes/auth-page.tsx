import AuthForm from "~/components/Auth/AuthForm";
import '.././index.css'
import {getUserFromSession, login, signup} from "~/server/data";
function AuthPage() {

    return (
        <div className="flex flex-col justify-center gap-4 items-center bg-indigo-950 authForm h-[700px]">
            <AuthForm/>
        </div>

    );
}
type Form = {
        id: number
        email:string;
        password:string
        name:string
        image:string
}

export async function action({request}) {
    const searchParams = new URL(request.url).searchParams;
    const authMode = searchParams.get('mode') || 'login';

    const formData = await request.formData();
    console.log(formData)
    const credentials = Object.fromEntries(formData) as Form
    console.log(credentials)
    try {
        if (authMode === 'login') {
            return await login(credentials);
        } else {
            return await signup(credentials);
        }
    } catch (error) {
            return error.message        }

}


export default AuthPage;

export function loader({request}) {
    return getUserFromSession(request);
}