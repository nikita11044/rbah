import { Currency } from 'entities/Currency';
import { validateProfile } from 'entities/Profile/model/services/validateProfile/validateProfile';
import { ProfileValidationError } from 'entities/Profile/model/types/profileSchema';
import { Country } from 'entities/Country';

const formData = {
    username: 'admin',
    age: 22,
    country: Country.RUS,
    firstName: 'firstName',
    lastName: 'lastName',
    city: 'Moscow',
    currency: Currency.RUB,
};
describe('validateProfile', () => {
    test('success', async () => {
        const result = validateProfile(formData);

        expect(result).toEqual([]);
    });

    test('failure (incorrect fist name and last name)', async () => {
        const result = validateProfile({ ...formData, firstName: '', lastName: '' });

        expect(result).toEqual([
            ProfileValidationError.INCORRECT_USER_DATA,
        ]);
    });

    test('failure (incorrect age)', async () => {
        const result = validateProfile({ ...formData, age: undefined });

        expect(result).toEqual([
            ProfileValidationError.INCORRECT_AGE,
        ]);
    });

    test('failure (incorrect country)', async () => {
        const result = validateProfile({ ...formData, country: undefined });

        expect(result).toEqual([
            ProfileValidationError.INCORRECT_COUNTRY,
        ]);
    });

    test('failure (invalid data)', async () => {
        const result = validateProfile({});

        expect(result).toEqual([
            ProfileValidationError.INCORRECT_USER_DATA,
            ProfileValidationError.INCORRECT_AGE,
            ProfileValidationError.INCORRECT_COUNTRY,
        ]);
    });
});
