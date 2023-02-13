import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeCtx } from './ThemeCtx';

type UseThemeReturnType = {
    changeTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeReturnType {
    const { theme, setTheme } = useContext(ThemeCtx);

    const changeTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        changeTheme,
    };
}
