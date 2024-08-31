import AuthForm from "~/components/Auth/AuthForm";
import '.././index.css'
function Auth() {

    return (
        <div className="flex flex-col justify-center gap-4 items-center bg-indigo-950 authForm h-[700px]">
            <AuthForm/>
        </div>

    );
}

export default Auth;