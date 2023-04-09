import { getProfileValidationErrors } from 'entities/Profile';
import { IGlobalStateSchema } from 'app/providers/StoreProvider';
import { ProfileValidationError } from 'entities/Profile/model/types/profileSchema';

const validationErrors = [
    ProfileValidationError.INCORRECT_USER_DATA,
    ProfileValidationError.INCORRECT_AGE,
];

describe('getProfileValidationErrors', () => {
    test('should work with non-empty state', () => {
        const state: DeepPartial<IGlobalStateSchema> = {
            profile: {
                validationErrors,
            },
        };
        expect(getProfileValidationErrors(state as IGlobalStateSchema)).toEqual(validationErrors);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<IGlobalStateSchema> = {};
        expect(getProfileValidationErrors(state as IGlobalStateSchema)).toEqual(undefined);
    });
});
