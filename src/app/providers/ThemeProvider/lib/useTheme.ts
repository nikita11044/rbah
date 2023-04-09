import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeCtx } from './ThemeCtx';

type UseThemeReturnType = {
    changeTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeReturnType {
    const { theme, setTheme } = useContext(ThemeCtx);

    const changeTheme = () => {
        let newTheme: Theme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.PURPLE;
            break;
        default:
            newTheme = Theme.DARK;
            break;
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        changeTheme,
    };
}
