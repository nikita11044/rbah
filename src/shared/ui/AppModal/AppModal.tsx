import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './AppModal.module.scss';

interface IModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void,
    lazy?: boolean
}

const ANIMATION_DELAY = 300;

export const AppModal = ({
    className,
    children,
    isOpen,
    onClose,
    lazy,
}: IModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const { theme } = useTheme();

    const mods: Record<string, boolean> = {
        [styles.open]: isOpen,
        [styles.isClosing]: isClosing,
    };

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);

    const handelContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(styles.AppModal, mods, ['app_modal', className, theme])}>
                <div className={styles.overlay} onClick={handleClose}>
                    <div
                        className={styles.content}
                        onClick={handelContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
