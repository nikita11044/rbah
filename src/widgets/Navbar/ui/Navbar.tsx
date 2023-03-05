import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppBtn, AppBtnTheme, Modal } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface INavbarProps {
    className?: string
}

export const Navbar = ({ className }: INavbarProps) => {
    const { t } = useTranslation('translation');
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const handleModalToggle = useCallback(() => {
        setIsAuthModalOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <AppBtn
                theme={AppBtnTheme.CLEAR}
                className={styles.links}
                onClick={handleModalToggle}
            >
                {t('Войти')}
            </AppBtn>
            <Modal isOpen={isAuthModalOpen} onClose={handleModalToggle}>
                {/* eslint-disable-next-line max-len */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dicta doloremque ducimus illo natus tempora velit. Commodi cupiditate et facere fugiat ipsa libero maxime neque, obcaecati officia praesentium quod, reprehenderit.
            </Modal>
        </div>
    );
};
