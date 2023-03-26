import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppBtn, AppBtnTheme } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import styles from './Navbar.module.scss';

interface INavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: INavbarProps) => {
    const { t } = useTranslation('translation');
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const dispatch = useDispatch();

    const authData = useSelector(getUserAuthData);

    const handleModalClose = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const handleModalOpen = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(styles.Navbar, {}, [className])}>
                <AppBtn
                    theme={AppBtnTheme.CLEAR}
                    className={styles.links}
                    onClick={handleLogout}
                >
                    {t('Выйти')}
                </AppBtn>
            </div>
        );
    }

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <AppBtn
                theme={AppBtnTheme.CLEAR}
                className={styles.links}
                onClick={handleModalOpen}
            >
                {t('Войти')}
            </AppBtn>
            {
                isAuthModalOpen
                && (
                    <LoginModal isOpen={isAuthModalOpen} onClose={handleModalClose} />
                )
            }
        </div>
    );
});
