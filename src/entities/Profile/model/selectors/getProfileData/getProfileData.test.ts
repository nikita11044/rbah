import { getProfileData } from 'entities/Profile';
import { IGlobalStateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';

const profileData = {
    username: 'admin',
    age: 22,
    country: Country.RUS,
    firstName: 'firstName',
    lastName: 'lastName',
    city: 'Moscow',
    currency: Currency.RUB,
};

describe('getProfileData', () => {
    test('should work with non-empty state', () => {
        const state: DeepPartial<IGlobalStateSchema> = {
            profile: {
                profileData,
            },
        };
        expect(getProfileData(state as IGlobalStateSchema)).toEqual(profileData);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<IGlobalStateSchema> = {};
        expect(getProfileData(state as IGlobalStateSchema)).toEqual(undefined);
    });
});
