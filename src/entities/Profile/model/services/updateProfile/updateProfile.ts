import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkOptions } from 'app/providers/StoreProvider';
import { getProfileFormData } from 'entities/Profile';
import { validateProfile } from 'entities/Profile/model/services/validateProfile/validateProfile';
import { IProfile, ProfileValidationError } from '../../types/profileSchema';

export const updateProfile = createAsyncThunk<
    IProfile,
    void,
    IThunkOptions<Array<ProfileValidationError>>
>(
    'profileData/updateProfile',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const formData = getProfileFormData(getState());

        const errors = validateProfile(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<IProfile>('/profile', formData);
            return response.data;
        } catch (e) {
            return rejectWithValue([ProfileValidationError.SERVER_ERROR]);
        }
    },
);
