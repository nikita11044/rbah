import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './AppText.module.scss';

export enum AppTextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

interface IAppTextProps {
    className?: string
    title?: string
    text?: string
    theme?: AppTextTheme
    align?: TextAlign
}

export const AppText = memo(({
    className,
    title,
    text,
    theme = AppTextTheme.PRIMARY,
    align = TextAlign.LEFT,
}: IAppTextProps) => {
    const mods: Mods = {
        [styles[theme]]: true,
        [styles[align]]: true,
    };

    return (
        <div className={classNames(styles.AppText, mods, [className])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
});
