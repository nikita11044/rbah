import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './AppBtn.module.scss';

export enum AppButtonTheme {
    CLEAR = 'clear'
}

interface IAppBtnProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: AppButtonTheme
}

export const AppBtn: FC<IAppBtnProps> = (props) => {
    const {
        className,
        children,
        theme = AppButtonTheme.CLEAR,
        ...otherProps
    } = props;

    return (
        <button
            className={
                classNames(
                    styles.AppBtn,
                    {},
                    [className, styles[theme]],
                )
            }
            {...otherProps}
        >
            {children}
        </button>
    );
};
