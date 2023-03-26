import axios from 'axios';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Dispatch } from '@reduxjs/toolkit';
import { IGlobalStateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { AsyncThunkTest } from 'shared/config/tests/AsyncThunkTest';

jest.mock('axios');

const axiosMock = jest.mocked(axios, true);

describe('loginByUsername', () => {
    test('successful login', async () => {
        const userData = { username: 'username', id: '1' };

        axiosMock.post.mockReturnValue(
            Promise.resolve({ data: userData }),
        );

        const asyncThunkTest = new AsyncThunkTest(loginByUsername);
        const res = await asyncThunkTest.call({ username: 'username', password: 'pswd' });

        expect(asyncThunkTest.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(asyncThunkTest.dispatch).toHaveBeenCalledTimes(3);
        expect(axiosMock.post).toHaveBeenCalled();
        expect(res.meta.requestStatus).toBe('fulfilled');
        expect(res.payload).toEqual(userData);
    });

    test('login with error', async () => {
        axiosMock.post.mockReturnValue(
            Promise.resolve({ status: 403 }),
        );

        const asyncThunkTest = new AsyncThunkTest(loginByUsername);
        const res = await asyncThunkTest.call({ username: 'username', password: 'pswd' });

        expect(axiosMock.post).toHaveBeenCalled();
        expect(asyncThunkTest.dispatch).toHaveBeenCalledTimes(2);
        expect(res.meta.requestStatus).toBe('rejected');
        expect(res.payload).toEqual('error');
    });
});
