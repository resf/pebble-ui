import React, { createContext } from 'react';

export interface ThemeColors {
    light: string[];
    primary: string[];
    success: string[];
    danger: string[];
    warning: string[];
    info: string[];
    like: string[];
};

type Theme = {
    colors: ThemeColors
};

const defaultTheme = {
    colors: {
        light: ['white', 'gray-900', 'gray-200'],
        primary: ['green-500', 'white', 'green-200'],
        success: ['green-500', 'white', 'green-200'],
        danger: ['red-500', 'white', 'red-200'],
        warning: ['yellow-500', 'white', 'yellow-200'],
        info: ['blue-500', 'white', 'blue-200'],
        like: ['pink-500', 'white', 'pink-200']
    } as ThemeColors
} as Theme;

const ThemeContext = createContext(defaultTheme);

type Props = { children: React.ReactNode };
export const ThemeProvider = ({ children }: Props) => {
    return (
        <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>
    )
};

export const useTheme = () => React.useContext(ThemeContext);