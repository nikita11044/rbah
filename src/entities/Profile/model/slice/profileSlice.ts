import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfile } from '../services/fetchProfile/fetchProfile';
import { updateProfile } from '../services/updateProfile/updateProfile';
import { IProfile, IProfileSchema } from '../types/profileSchema';

const initialState: IProfileSchema = {
    profileData: undefined,
    formData: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.formData = state.profileData;
        },
        updateProfile: (state, action: PayloadAction<IProfile>) => {
            state.formData = {
                ...state.formData,
                ...action.payload,
            };
        },
    },
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
                    state.formData = action.payload;
                },
            )
            .addCase(fetchProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfile.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                updateProfile.fulfilled,
                (
                    state,
                    action: PayloadAction<IProfile>,
                ) => {
                    state.isLoading = false;
                    state.profileData = action.payload;
                    state.formData = action.payload;
                },
            )
            .addCase(updateProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
