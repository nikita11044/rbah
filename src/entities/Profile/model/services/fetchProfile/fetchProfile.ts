import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkOptions } from 'app/providers/StoreProvider';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
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
            const response = await extra.api.get<IProfile>('/profile', {
                headers: { authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '' },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
