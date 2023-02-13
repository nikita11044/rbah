import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import { LangSwitch } from 'widgets/LangSwitch';
import styles from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string
}

export const Sidebar = ({ className }: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>1</button>
            <div className={styles.switchers}>
                <ThemeSwitch />
                <LangSwitch className={styles.lang} />
            </div>
        </div>
    );
};
