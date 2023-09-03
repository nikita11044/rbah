import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppText } from 'shared/ui';
import styles from './ArticleImageBlock.module.scss';
import { IArticleImageBlock } from '../../model/types/article';

interface IArticleImageBlockProps {
    className?: string
    block: IArticleImageBlock
}

export const ArticleImageBlock = memo(({
    className,
    block,
}: IArticleImageBlockProps) => (
    <div className={classNames(styles.ArticleImageBlock, {}, [className])}>
        <img className={styles.img} src={block.src} alt={block.title} />
        {block.title && <AppText text={block.title} />}
    </div>
));
