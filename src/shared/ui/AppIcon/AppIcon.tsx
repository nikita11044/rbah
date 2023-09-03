import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './AppIcon.module.scss';

interface IAppIconProps {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const AppIcon = memo(({
    className,
    Svg,
}: IAppIconProps) => <Svg className={classNames(styles.AppIcon, {}, [className])} />);
