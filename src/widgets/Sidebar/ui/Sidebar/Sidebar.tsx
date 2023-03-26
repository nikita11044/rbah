import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useState } from 'react';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import { LangSwitch } from 'widgets/LangSwitch';
import {
    AppBtn, AppBtnTheme,
} from 'shared/ui';
import { AppBtnSize } from 'shared/ui/AppBtn/AppBtn';
import { useTranslation } from 'react-i18next';
import { SidebarItems } from 'widgets/Sidebar/model/items';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: ISidebarProps) => {
    const { t } = useTranslation('translation');
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <AppBtn
                data-testid="sidebar-toggle"
                theme={AppBtnTheme.BACKGROUND_INVERTED}
                square
                size={AppBtnSize.L}
                className={styles.collapseBtn}
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </AppBtn>
            <div className={styles.items}>
                {SidebarItems.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </div>
            <div className={styles.switchers}>
                <ThemeSwitch />
                <LangSwitch className={styles.lang} />
            </div>
        </div>
    );
});
