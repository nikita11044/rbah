import {classNames} from "shared/lib/classNames/classNames";
import styles from './AppBtn.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

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
        ...otherProps } = props

    return (
        <button
            className={classNames(styles.AppBtn, {}, [className, styles[theme]])}
            {...otherProps}>
            {children}
        </button>
    );
};
