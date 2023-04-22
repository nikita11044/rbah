import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './ArticleDetailsPage.module.scss';

interface IArticleDetailsProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: IArticleDetailsProps) => {
    const { t } = useTranslation('article');
    return (
        <div className={classNames(styles.ArticleDetails, {}, [className])}>
            Articles Details
        </div>
    );
};

export default memo(ArticleDetailsPage);
