import { IArticle } from 'entities/Article';

export interface IArticleDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: IArticle;
}
