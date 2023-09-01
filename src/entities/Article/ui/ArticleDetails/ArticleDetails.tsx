import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicDataLoader, ReducerList } from 'shared/lib/DinamicDataLoader/DynamicDataLoader';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticlesDetailsData,
    getArticlesDetailsError,
    getArticlesDetailsLoading,
} from 'entities/Article/model/selectors/articleDetails';
import { AppText, TextAlign } from 'shared/ui/AppText/AppText';
import { AppSkeleton } from 'shared/ui';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import styles from './ArticleDetails.module.scss';

interface IArticleDetailsProps {
    id: string
    className?: string
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ id, className }: IArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticlesDetailsLoading);
    const article = useSelector(getArticlesDetailsData);
    const error = useSelector(getArticlesDetailsError);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div>
                <AppSkeleton className={styles.avatar} width={200} height={200} borderRadius="50%" />
                <AppSkeleton className={styles.title} width={300} height={32} />
                <AppSkeleton className={styles.skeleton} width={600} height={24} />
                <AppSkeleton className={styles.skeleton} width="100%" height={200} />
                <AppSkeleton className={styles.skeleton} width="100%" height={200} />
            </div>
        );
    } else if (error) {
        content = (
            <AppText align={TextAlign.CENTER} title={t('При загрузке статьи произошла ошибка')} />
        );
    } else {
        content = (
            <div className={classNames(styles.ArticleDetails, {}, [className])}>
                article details
            </div>
        );
    }

    return (
        <DynamicDataLoader reducers={reducers} removeOnUnmount>
            {content}
        </DynamicDataLoader>
    );
});
