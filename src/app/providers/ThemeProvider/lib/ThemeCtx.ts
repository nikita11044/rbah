import { createContext } from 'react';

export enum Theme {
    LIGHT = 'light_theme',
    DARK = 'dark_theme',
    PURPLE = 'purple_theme'
}

export interface ThemeCtxProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeCtx = createContext<ThemeCtxProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
