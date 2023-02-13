import { createContext } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface ThemeCtxProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeCtx = createContext<ThemeCtxProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
