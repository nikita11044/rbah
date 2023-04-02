import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import styles from './AppAvatar.module.scss';

interface IAppAvatarProps {
    className?: string
    src?: string
    size?: number
}

export const AppAvatar = ({ className, src, size }: IAppAvatarProps) => {
    const mods: Mods = {

    };

    const inlineStyles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            alt="avatar"
            style={inlineStyles}
            className={classNames(styles.AppAvatar, {}, [className])}
            src={src}
        />
    );
};
