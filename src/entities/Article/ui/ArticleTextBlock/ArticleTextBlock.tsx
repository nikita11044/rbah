import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { IArticleTextBlock } from 'entities/Article/model/types/article';
import { AppText } from 'shared/ui';
import styles from './ArticleTextBlock.module.scss';

interface IArticleTextBlockProps {
    className?: string
    block: IArticleTextBlock
}

export const ArticleTextBlock = memo(({
    className,
    block,
}: IArticleTextBlockProps) => (
    <div className={classNames(styles.ArticleTextBlock, {}, [className])}>
        {block.title && <AppText title={block.title} className={styles.title} />}
        {block.paragraphs.map((paragraph) => (
            <AppText key={paragraph} text={paragraph} className={styles.paragraph} />
        ))}
    </div>
));
