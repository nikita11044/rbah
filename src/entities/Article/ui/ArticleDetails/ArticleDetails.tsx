import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicDataLoader, ReducerList } from 'shared/lib/DinamicDataLoader/DynamicDataLoader';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { AppText, TextAlign } from 'shared/ui/AppText/AppText';
import { AppAvatar, AppSkeleton } from 'shared/ui';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { AppIcon } from 'shared/ui/AppIcon/AppIcon';
import {
    getArticlesDetailsData,
    getArticlesDetailsError,
    getArticlesDetailsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleTextBlock } from '../../ui/ArticleTextBlock/ArticleTextBlock';
import { ArticleCodeBlock } from '../../ui/ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../../ui/ArticleImageBlock/ArticleImageBlock';
import styles from './ArticleDetails.module.scss';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

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

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.TEXT:
            return <ArticleTextBlock key={block.id} block={block} className={styles.block} />;

        case ArticleBlockType.CODE:
            return <ArticleCodeBlock key={block.id} block={block} className={styles.block} />;

        case ArticleBlockType.IMAGE:
            return <ArticleImageBlock key={block.id} block={block} className={styles.block} />;

        default:
            return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
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
                <div className={styles.avatarWrapper}>
                    <AppAvatar size={200} src={article?.img} className={styles.avatar} />
                </div>
                <AppText title={article?.title} text={article?.subtitle} />
                <div className={styles.articleInfo}>
                    <AppIcon Svg={EyeIcon} className={styles.icon} />
                    <AppText text={String(article?.views)} />
                </div>
                <div className={styles.articleInfo}>
                    <AppIcon Svg={CalendarIcon} className={styles.icon} />
                    <AppText text={String(article?.createdAt)} />
                </div>
                {article?.blocks.map((block) => renderBlock(block))}
            </div>
        );
    }

    return (
        <DynamicDataLoader reducers={reducers} removeOnUnmount>
            {content}
        </DynamicDataLoader>
    );
});
