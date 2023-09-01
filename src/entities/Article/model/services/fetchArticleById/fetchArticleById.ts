import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkOptions } from 'app/providers/StoreProvider';
import { IArticle } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
    IArticle,
    string,
    IThunkOptions<string>
>(
    'articlesDetailsData/fetchArticleById',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<IArticle>(`/articles/${articleId}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
