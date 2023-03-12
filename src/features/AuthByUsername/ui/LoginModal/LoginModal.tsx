import { classNames } from 'shared/lib/classNames/classNames';
import { AppModal } from 'shared/ui/AppModal/AppModal';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
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
        <LoginForm />
    </AppModal>
);
