import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './Articles.module.scss';

interface IArticleDetailsProps {
    className?: string
}

const Articles = ({ className }: IArticleDetailsProps) => {
    const { t } = useTranslation('article');
    return (
        <div className={classNames(styles.Articles, {}, [className])}>
            Articles
        </div>
    );
};

export default memo(Articles);
