import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppCodeBlock } from 'shared/ui/AppCodeBlock/AppCodeBlock';
import styles from './ArticleCodeBlock.module.scss';
import { IArticleCodeBlock } from '../../model/types/article';

interface IArticleCodeBlockProps {
    className?: string
    block: IArticleCodeBlock
}

export const ArticleCodeBlock = memo(({
    className,
    block,
}: IArticleCodeBlockProps) => (
    <div className={classNames(styles.ArticleCodeBlock, {}, [className])}>
        <AppCodeBlock codeText={block.code} />
    </div>
));
