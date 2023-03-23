import { classNames } from 'shared/lib/classNames/classNames';
import { AppModal } from 'shared/ui/AppModal/AppModal';
import { Suspense } from 'react';
import { Loader } from 'widgets/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import styles from './LoginModal.module.scss';

interface ILoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: ILoginModalProps) => (
    <AppModal
        className={classNames(styles.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync />
        </Suspense>
    </AppModal>
);
