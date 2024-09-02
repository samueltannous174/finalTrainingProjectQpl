

function isValidEmail(value) {
    return value && value.includes('@');
}

function isValidPassword(value) {
    return value && value.trim().length >= 7;
}

type Input = {
    email: string;
    password: string;

};


export function validateCredentials(input: Input): void {
    const validationErrors: Record<string, string> = {};

    if (!isValidEmail(input.email)) {
        validationErrors.email = 'Invalid email address.';
    }

    if (!isValidPassword(input.password)) {
        validationErrors.password = 'Invalid password. Must be at least 7 characters long.';
    }

    if (Object.keys(validationErrors).length > 0) {
        throw validationErrors;
    }
}


