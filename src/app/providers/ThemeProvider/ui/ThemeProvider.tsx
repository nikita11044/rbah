import React, {
    FC, ReactNode, useMemo, useState,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeCtx } from '../lib/ThemeCtx';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface IThemeProviderProps {
    initialTheme?: Theme,
    children?: ReactNode
}

const ThemeProvider: FC<IThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeCtx.Provider value={defaultProps}>
            {children}
        </ThemeCtx.Provider>
    );
};

export default ThemeProvider;
