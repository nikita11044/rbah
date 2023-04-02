import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';
import styles from './AppBtn.module.scss';

export enum AppBtnTheme {
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
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
    theme?: AppBtnTheme
    square?: boolean
    size?: AppBtnSize
    disabled?: boolean
    children?: ReactNode
}

export const AppBtn: FC<IAppBtnProps> = memo((props: IAppBtnProps) => {
    const {
        className,
        children,
        theme = AppBtnTheme.OUTLINE,
        square,
        disabled,
        size = AppBtnSize.M,
        ...otherProps
    } = props;

    const mods: Mods = {
        [styles[theme]]: true,
        [styles.square]: square,
        [styles[size]]: true,
        [styles.disabled]: disabled,
    };

    return (
        <button
            disabled={disabled}
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
});
