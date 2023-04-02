import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ISidebarItem } from 'widgets/Sidebar/model/items';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import styles from './SidebarItem.module.scss';

interface ISidebarItemProps {
    item: ISidebarItem
    collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: ISidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.private && !isAuth) {
        return null;
    }

    return (
        <AppLink
            className={classNames(styles.SidebarItem, { [styles.collapsed]: collapsed })}
            to={item.path}
            theme={AppLinkTheme.SECONDARY}
        >
            <item.Icon className={styles.icon} />
            <span className={styles.link}>{t(item.text)}</span>
        </AppLink>
    );
});
