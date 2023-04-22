import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleDetails.module.scss';

interface IArticleDetailsProps {
    className?: string
}

export const ArticleDetails = ({ className }: IArticleDetailsProps) => (
    <div className={classNames(styles.ArticleDetails, {}, [className])} />
);
