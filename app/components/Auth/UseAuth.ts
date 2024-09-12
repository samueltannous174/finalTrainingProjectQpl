import { useState } from 'react';

export function useAuthForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [name, setName] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const handleEmailBlur = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    };

    const handlePasswordBlur = () => {
        if (password.length < 7) {
            setPasswordError('Password must be at least 7 characters long');
        } else {
            setPasswordError('');
        }
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };


    return {
        email,
        password,
        name,
        emailError,
        passwordError,
        handleEmailChange,
        handleEmailBlur,
        handlePasswordChange,
        handlePasswordBlur,
        handleNameChange
    };
}
