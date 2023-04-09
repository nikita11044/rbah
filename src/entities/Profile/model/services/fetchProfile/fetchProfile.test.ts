import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { AsyncThunkTest } from 'shared/lib/tests/AsyncThunkTest';
import { fetchProfile } from 'entities/Profile';

const data = {
    username: 'admin',
    age: 22,
    country: Country.RUS,
    firstName: 'firstName',
    lastName: 'lastName',
    city: 'Moscow',
    currency: Currency.RUB,
};
describe('fetchProfile', () => {
    test('success', async () => {
        const thunk = new AsyncThunkTest(fetchProfile);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.call();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('failure (login error)', async () => {
        const thunk = new AsyncThunkTest(fetchProfile);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.call();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
