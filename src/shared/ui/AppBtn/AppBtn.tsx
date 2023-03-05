import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './AppBtn.module.scss';

export enum AppBtnTheme {
    OUTLINE = 'outline',
    CLEAR = 'clear',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background_inverted',
}

export enum AppBtnSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface IAppBtnProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: AppBtnTheme,
    square?: boolean,
    size?: AppBtnSize
}

export const AppBtn: FC<IAppBtnProps> = (props) => {
    const {
        className,
        children,
        theme = AppBtnTheme.OUTLINE,
        square,
        size = AppBtnSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [styles[theme]]: true,
        [styles.square]: square,
        [styles[size]]: true,
    };

    return (
        <button
            className={
                classNames(
                    styles.AppBtn,
                    mods,
                    [className, styles[theme]],
                )
            }
            {...otherProps}
        >
            {children}
        </button>
    );
};
