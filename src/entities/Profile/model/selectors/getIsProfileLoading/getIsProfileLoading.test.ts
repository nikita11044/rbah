import { getIsProfileLoading } from 'entities/Profile';
import { IGlobalStateSchema } from 'app/providers/StoreProvider';

describe('getIsProfileLoading', () => {
    test('should work with non-empty state', () => {
        const state: DeepPartial<IGlobalStateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getIsProfileLoading(state as IGlobalStateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<IGlobalStateSchema> = {};
        expect(getIsProfileLoading(state as IGlobalStateSchema)).toEqual(false);
    });
});
