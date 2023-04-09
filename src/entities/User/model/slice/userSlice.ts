import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { IUser, IUserSchema } from '../types/userSchema';

const initialState: IUserSchema = {
    _init: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<IUser>) => {
            state.auth = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
            if (user) {
                state.auth = JSON.parse(user);
            }
            state._init = true;
        },
        logout: (state) => {
            state.auth = undefined;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
        },
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
