import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.scss';

interface INotFoundProps {
    className?: string
}

export const NotFound = ({ className }: INotFoundProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.NotFound, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};
