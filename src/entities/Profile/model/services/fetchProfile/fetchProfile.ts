import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkOptions } from 'app/providers/StoreProvider';
import { IProfile } from '../../types/profileSchema';

export const fetchProfile = createAsyncThunk<
    IProfile,
    void,
    IThunkOptions<string>
>(
    'profileData/fetchProfile',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<IProfile>('/profile');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
