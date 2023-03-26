import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import { AppBtn, AppBtnTheme } from 'shared/ui';

interface IThemeSwitchProps {
    className?: string
}

export const ThemeSwitch = memo(({ className }: IThemeSwitchProps) => {
    const { theme, changeTheme } = useTheme();

    return (
        <AppBtn
            theme={AppBtnTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={changeTheme}
        >
            {
                theme === Theme.DARK
                    ? <DarkThemeIcon />
                    : <LightThemeIcon />
            }
        </AppBtn>
    );
});
