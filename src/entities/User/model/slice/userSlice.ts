import { createSlice } from '@reduxjs/toolkit';
import { IUserSchema } from 'entities/User/model/types/user';

const initialState: IUserSchema = {};

const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: userActions, reducer: userReducer } = counterSlice;
