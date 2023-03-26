import { DeepPartial } from '@reduxjs/toolkit';
import { ILoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice', () => {
    test('should set username', () => {
        const state: DeepPartial<ILoginSchema> = { username: 'username' };
        expect(loginReducer(
            state as ILoginSchema,
            loginActions.setUsername('new username'),
        )).toEqual({ username: 'new username' });
    });

    test('should set password', () => {
        const state: DeepPartial<ILoginSchema> = { password: 'password' };
        expect(loginReducer(
            state as ILoginSchema,
            loginActions.setPassword('new password'),
        )).toEqual({ password: 'new password' });
    });
});
