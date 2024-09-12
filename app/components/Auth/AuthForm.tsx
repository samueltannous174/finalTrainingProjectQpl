import {useState} from "react";
import {
    Form,
    Link,
    useSearchParams,
    useNavigation, useActionData,
} from '@remix-run/react';
import {useAuthForm} from "~/components/Auth/UseAuth";
import SignUpAdditions from "~/components/Auth/SignUpAdditions";



function AuthForm() {
    const [searchParams] = useSearchParams();
    const navigation = useNavigation();
    const validation = useActionData();
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [ setImage] = useState(null);

    const {
        email,
        password,
        emailError,
        passwordError,
        handleEmailChange,
        handleEmailBlur,
        handlePasswordChange,
        handlePasswordBlur,
    } = useAuthForm()




    const authMode = searchParams.get('mode') || 'login';
    const submitBtnCaption = authMode === 'login' ? 'Login' : 'Create User';
    const toggleBtnCaption =
        authMode === 'login' ? 'Create a new user' : 'Log in with existing user';

    const isSubmitting = navigation.state !== 'idle';
    const isButtonDisabled = isSubmitting || emailError.length > 0 || passwordError.length > 0 || confirmPasswordError.length > 0;

    const containerClassName = `space mt-[40px] space-y-10 mx-auto bg-cyan-950 p-8 rounded-lg shadow-lg  ${
        authMode === 'signup' ? 'w-[70%] md:w-[50%] xl:w-[25%]' : ''
    }`;


    return (
        <div className={containerClassName}>
            {validation && <p className="text-[11px] text-red-600">{validation}</p>}
            <h2 className="text-2xl font-bold text-center mb-6 text-white">
                {authMode === 'login' ? 'Sign in to your account' : 'Create a new account'}
            </h2>

            <Form method="post" className={`${authMode === 'login' ? "space-y-10" : "space-y-2"}`} id="auth-form">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}
                        required
                        className={`mt-1 block w-full px-3 py-2 border ${
                            emailError ? 'border-red-500' : 'border-gray-300'
                        } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                    />
                    {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-white">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        onBlur={handlePasswordBlur}
                        minLength={7}
                        required
                        className={`mt-1 block w-full px-3 py-2 border ${
                            passwordError ? 'border-red-500' : 'border-gray-300'
                        } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                    />
                    {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                </div>

                {authMode === 'signup' && (<SignUpAdditions password={password} onConfirmPasswordErrorChange={setConfirmPasswordError} setImage={setImage}/>)}
                <div className="flex justify-between items-center">
                    <button
                        type="submit"
                        disabled={isButtonDisabled}
                        className={`inline-flex items-center justify-center w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                            isButtonDisabled
                                ? ' bg-gray-800  cursor-not-allowed'
                                : 'bg-gray-800 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                        }`}
                    >
                        {isSubmitting ? '..............' : submitBtnCaption}
                    </button>
                </div>

                <div className="text-center mt-4">
                    <Link to={authMode === 'login' ? '?mode=signup' : '?mode=login'} className="text-purple-500">
                        {toggleBtnCaption}
                    </Link>
                </div>
            </Form>
        </div>
    );
}


export default AuthForm;
