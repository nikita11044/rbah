import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './AppText.module.scss';

export enum AppTextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface IAppTextProps {
    className?: string
    title?: string
    text?: string
    theme?: AppTextTheme
}

export const AppText = memo(({
    className,
    title,
    text,
    theme = AppTextTheme.PRIMARY,
}: IAppTextProps) => (
    <div className={classNames(styles.AppText, { [styles[theme]]: true }, [className])}>
        {title && <p className={styles.title}>{title}</p>}
        {text && <p className={styles.text}>{text}</p>}
    </div>
));
