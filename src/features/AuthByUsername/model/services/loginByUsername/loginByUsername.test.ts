import axios from 'axios';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { userActions } from 'entities/User';
import { AsyncThunkTest } from 'shared/lib/tests/AsyncThunkTest';

describe('loginByUsername', () => {
    test('successful login', async () => {
        const userData = { username: 'username', id: '1' };

        const asyncThunkTest = new AsyncThunkTest(loginByUsername);

        asyncThunkTest.api.post.mockReturnValue(
            Promise.resolve({ data: userData }),
        );

        const res = await asyncThunkTest.call({ username: 'username', password: 'pswd' });

        expect(asyncThunkTest.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(asyncThunkTest.dispatch).toHaveBeenCalledTimes(3);
        expect(asyncThunkTest.api.post).toHaveBeenCalled();
        expect(res.meta.requestStatus).toBe('fulfilled');
        expect(res.payload).toEqual(userData);
    });

    test('login with error', async () => {
        const asyncThunkTest = new AsyncThunkTest(loginByUsername);

        asyncThunkTest.api.post.mockReturnValue(
            Promise.resolve({ status: 403 }),
        );

        const res = await asyncThunkTest.call({ username: 'username', password: 'pswd' });

        expect(asyncThunkTest.api.post).toHaveBeenCalled();
        expect(asyncThunkTest.dispatch).toHaveBeenCalledTimes(2);
        expect(res.meta.requestStatus).toBe('rejected');
        expect(res.payload).toEqual('error');
    });
});
