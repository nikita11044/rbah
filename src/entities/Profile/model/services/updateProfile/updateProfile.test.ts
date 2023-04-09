import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { AsyncThunkTest } from 'shared/lib/tests/AsyncThunkTest';
import { updateProfile } from 'entities/Profile';
import { ProfileValidationError } from 'entities/Profile/model/types/profileSchema';

const formData = {
    username: 'admin',
    age: 22,
    country: Country.RUS,
    firstName: 'firstName',
    lastName: 'lastName',
    city: 'Moscow',
    currency: Currency.RUB,
};
describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new AsyncThunkTest(updateProfile, {
            profile: {
                formData,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ data: formData }));

        const result = await thunk.call();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(formData);
    });

    test('error', async () => {
        const thunk = new AsyncThunkTest(updateProfile, {
            profile: {
                formData,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.call();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ProfileValidationError.SERVER_ERROR,
        ]);
    });

    test('validate error', async () => {
        const thunk = new AsyncThunkTest(updateProfile, {
            profile: {
                formData: { ...formData, lastName: '' },
            },
        });
        const result = await thunk.call();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ProfileValidationError.INCORRECT_USER_DATA,
        ]);
    });
});
