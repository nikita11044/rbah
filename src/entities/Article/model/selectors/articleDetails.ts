import { IGlobalStateSchema } from 'app/providers/StoreProvider';

export const getArticlesDetailsData = (state: IGlobalStateSchema) => state.articleDetails?.data;
export const getArticlesDetailsLoading = (state: IGlobalStateSchema) => state.articleDetails?.isLoading;
export const getArticlesDetailsError = (state: IGlobalStateSchema) => state.articleDetails?.error;
