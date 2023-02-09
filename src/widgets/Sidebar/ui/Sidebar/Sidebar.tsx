import {classNames} from "shared/lib/classNames/classNames";
import styles from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitch} from "widgets/ThemeSwitch";

interface ISidebarProps {
    className?: string
}

export const Sidebar = ({ className }: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle sidebar</button>
            <div className={styles.switchers}>
                <ThemeSwitch />
            </div>
        </div>
    );
};
