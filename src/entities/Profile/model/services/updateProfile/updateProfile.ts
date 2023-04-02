import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkOptions } from 'app/providers/StoreProvider';
import { getProfileFormData } from 'entities/Profile';
import { IProfile } from '../../types/profileSchema';

export const updateProfile = createAsyncThunk<
    IProfile,
    void,
    IThunkOptions<string>
>(
    'profileData/updateProfile',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const formData = getProfileFormData(getState());

        try {
            const response = await extra.api.put<IProfile>('/profile', formData);
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
