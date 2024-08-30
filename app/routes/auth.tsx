import AuthForm from "~/components/Auth/authForm";
import '.././index.css'
function Auth() {

    return (
        <div className="flex flex-col justify-center gap-4 items-center bg-amber-50 authForm h-[700px]">
            <AuthForm/>
        </div>

    );
}

export default Auth;