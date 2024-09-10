import {useState} from "react";
import ImageUploader from "~/components/Auth/ImageUploader";

type Props = {
    password: string;
    onConfirmPasswordErrorChange: (error: string) => void;
};

function SignUpAdditions({ password, onConfirmPasswordErrorChange }: Props) {
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setConfirmPassword(value);

        if (value !== password) {
            const error = 'Passwords do not match';
            setConfirmPasswordError(error);
            onConfirmPasswordErrorChange(error);
        } else {
            setConfirmPasswordError('');
            onConfirmPasswordErrorChange('');
        }
    };

    const handleConfirmPasswordBlur = () => {
        if (confirmPassword !== password) {
            const error = 'Passwords do not match';
            setConfirmPasswordError(error);
            onConfirmPasswordErrorChange(error);
        } else {
            setConfirmPasswordError('');
            onConfirmPasswordErrorChange('');
        }
    };

    return (
        <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mt-4">
                Confirm Password
            </label>
            <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                onBlur={handleConfirmPasswordBlur}
                required
                className={`mt-1 block w-full px-3 py-2 border ${
                    confirmPasswordError ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            />
            {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}

            <label htmlFor="username" className="block text-sm font-medium text-white mt-4">
                Username/Author
            </label>
            <input
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <ImageUploader/>
        </div>
    );
}

export default SignUpAdditions;
