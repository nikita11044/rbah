import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import { LangSwitch } from 'widgets/LangSwitch';
import {
    AppBtn, AppBtnTheme, AppLink, AppLinkTheme,
} from 'shared/ui';
import { AppBtnSize } from 'shared/ui/AppBtn/AppBtn';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import styles from './Sidebar.module.scss';

interface ISidebarProps {
    className?: string
}

export const Sidebar = ({ className }: ISidebarProps) => {
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
                <div className={styles.item}>
                    <AppLink
                        to={RoutePath.main}
                        theme={AppLinkTheme.SECONDARY}
                        className={styles.item}
                    >
                        <MainIcon className={styles.icon} />
                        <span className={styles.link}>{t('Главная')}</span>
                    </AppLink>
                </div>
                <div className={styles.item}>
                    <AppLink
                        to={RoutePath.about}
                        theme={AppLinkTheme.SECONDARY}
                        className={styles.item}
                    >
                        <AboutIcon className={styles.icon} />
                        <span className={styles.link}>{t('О сайте')}</span>
                    </AppLink>
                </div>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitch />
                <LangSwitch className={styles.lang} />
            </div>
        </div>
    );
};
