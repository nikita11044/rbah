import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { IProfile, IProfileSchema } from '../types/profileSchema';

const initialState: IProfileSchema = {
    profile: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<IProfile>) => {
            state.profile = action.payload;
        },
    },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
