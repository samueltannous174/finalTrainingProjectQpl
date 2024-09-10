import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: string; // Optionally accept an initial theme prop
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<string>(initialTheme || 'dark');
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, [initialTheme]);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);

        if (isClient) {
            localStorage.setItem('theme', newTheme);
        }
    }, [theme, isClient]);

    if (!isClient) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
