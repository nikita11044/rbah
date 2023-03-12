import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppBtn, AppBtnTheme, AppModal } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features';
import styles from './Navbar.module.scss';

interface INavbarProps {
    className?: string
}

export const Navbar = ({ className }: INavbarProps) => {
    const { t } = useTranslation('translation');
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const handleModalClose = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const handleModalOpen = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <AppBtn
                theme={AppBtnTheme.CLEAR}
                className={styles.links}
                onClick={handleModalOpen}
            >
                {t('Войти')}
            </AppBtn>
            <LoginModal isOpen={isAuthModalOpen} onClose={handleModalClose} />
        </div>
    );
};
