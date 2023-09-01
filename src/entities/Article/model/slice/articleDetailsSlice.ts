import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticle } from '../types/article';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { IArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState: IArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticleById.fulfilled,
                (
                    state,
                    action: PayloadAction<IArticle>,
                ) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsActions, reducer: articleDetailsReducer } = articleDetailsSlice;
