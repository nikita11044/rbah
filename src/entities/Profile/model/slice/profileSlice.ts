import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { fetchProfile } from 'entities/Profile';
import { IProfile, IProfileSchema } from '../types/profileSchema';

const initialState: IProfileSchema = {
    profileData: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchProfile.fulfilled,
                (
                    state,
                    action: PayloadAction<IProfile>,
                ) => {
                    state.isLoading = false;
                    state.profileData = action.payload;
                },
            )
            .addCase(fetchProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
