import { getProfileReadOnly } from 'entities/Profile';
import { IGlobalStateSchema } from 'app/providers/StoreProvider';

describe('getProfileReadOnly', () => {
    test('should work with non-empty state', () => {
        const state: DeepPartial<IGlobalStateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadOnly(state as IGlobalStateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<IGlobalStateSchema> = {};
        expect(getProfileReadOnly(state as IGlobalStateSchema)).toEqual(undefined);
    });
});
