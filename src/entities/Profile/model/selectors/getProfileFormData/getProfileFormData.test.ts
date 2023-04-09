import { getProfileFormData } from 'entities/Profile';
import { IGlobalStateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';

const formData = {
    username: 'admin',
    age: 22,
    country: Country.RUS,
    firstName: 'firstName',
    lastName: 'lastName',
    city: 'Moscow',
    currency: Currency.RUB,
};

describe('getProfileFormData', () => {
    test('should work with non-empty state', () => {
        const state: DeepPartial<IGlobalStateSchema> = {
            profile: {
                formData,
            },
        };
        expect(getProfileFormData(state as IGlobalStateSchema)).toEqual(formData);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<IGlobalStateSchema> = {};
        expect(getProfileFormData(state as IGlobalStateSchema)).toEqual(undefined);
    });
});
