import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { IThunkOptions } from 'app/providers/StoreProvider';

interface ILoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
    IUser,
    ILoginByUsernameProps,
    IThunkOptions<string>
>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.post<IUser>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
