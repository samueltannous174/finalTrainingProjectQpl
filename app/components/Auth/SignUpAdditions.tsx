import {useAuthForm} from "~/components/Auth/keyStrokeValidation";

function SignUpAdditions() {

    const {
        password,
        passwordError,
        handlePasswordChange,
        handlePasswordBlur,
    } = useAuthForm();

    return (

        <div className="flex flex-col">

            <label htmlFor="password" className="block text-sm font-medium text-white mt-4">
                confirm Password
            </label>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                required
                className={`mt-1 block w-full px-3 py-2 border ${
                    passwordError ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            />
            <label htmlFor="password" className="block text-sm font-medium text-white mt-4">
                Username/Author:
            </label>
            <input
                id="author"
                required
                className={`mt-1 block w-full px-3 py-1 border ${
                    passwordError ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            />


            <label htmlFor="password" className="block text-sm font-medium text-white mt-4">
                User Image (Url)
            </label>
            <input
                id="image"
                required
                className={`mt-1 block w-full px-3 py-2 border ${
                    passwordError ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            />

        </div>

    );
}

export default SignUpAdditions;
