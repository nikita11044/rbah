import { AppModal } from 'shared/ui/AppModal/AppModal';
import { Suspense } from 'react';
import { Loader } from 'widgets/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface ILoginModalProps {
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = ({ isOpen, onClose }: ILoginModalProps) => (
    <AppModal
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync />
        </Suspense>
    </AppModal>
);
