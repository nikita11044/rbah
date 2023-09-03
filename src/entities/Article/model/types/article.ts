export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}

export interface IArticleBlockBase {
    id: string
    type: ArticleBlockType
}
export interface IArticleTextBlock extends IArticleBlockBase {
    type: ArticleBlockType.TEXT
    title?: string
    paragraphs: string[]
}

export interface IArticleImageBlock extends IArticleBlockBase {
    type: ArticleBlockType.IMAGE
    src: string
    title: string
}

export interface IArticleCodeBlock extends IArticleBlockBase {
    type: ArticleBlockType.CODE
    code: string
}

export type ArticleBlock = IArticleTextBlock | IArticleImageBlock | IArticleCodeBlock

export enum ArticleType {
    IT = 'IT',
    BUSINESS = 'BUSINESS'
}

export interface IArticle {
    id: string
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    type: Array<ArticleType>
    blocks: Array<ArticleBlock>
}
