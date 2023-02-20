import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppBtn } from 'shared/ui';
import styles from './Error.module.scss';

interface IErrorProps {
    className?: string
}

export const Error = ({ className }: IErrorProps) => {
    const { t } = useTranslation();

    const reload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(styles.Error, {}, [className])}>
            <p>{t('Непредвиденная ошибка')}</p>
            <AppBtn onClick={reload}>{t('Обновить страницу')}</AppBtn>
        </div>
    );
};
