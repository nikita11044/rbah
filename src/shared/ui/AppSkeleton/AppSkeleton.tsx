import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo } from 'react';
import cls from './AppSkeleton.module.scss';

interface IAppSkeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    borderRadius?: string
}

export const AppSkeleton = memo(({
    className, height, width, borderRadius,
}: IAppSkeletonProps) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius,
    };

    return (
        <div className={classNames(cls.AppSkeleton, {}, [className])} style={styles} />
    );
});
