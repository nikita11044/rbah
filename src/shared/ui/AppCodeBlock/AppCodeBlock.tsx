import React, { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppBtn, AppBtnTheme } from 'shared/ui';
import CopyIcon from 'shared/assets/icons/copy.svg';
import styles from './AppCodeBlock.module.scss';

interface IAppCodeBlockProps {
    className?: string;
    codeText: string
}

export const AppCodeBlock = memo(({
    className,
    codeText,
}: IAppCodeBlockProps) => {
    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(codeText);
    }, [codeText]);

    return (
        <pre className={classNames(styles.AppCodeBlock, {}, [className])}>
            <AppBtn onClick={handleCopy} className={styles.copyBtn} theme={AppBtnTheme.CLEAR}>
                <CopyIcon className={styles.icon} />
            </AppBtn>
            <code>
                {codeText}
            </code>
        </pre>
    );
});
