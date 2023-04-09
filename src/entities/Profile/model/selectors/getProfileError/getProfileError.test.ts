import { getProfileError } from 'entities/Profile';
import { IGlobalStateSchema } from 'app/providers/StoreProvider';

describe('getProfileError', () => {
    test('should work with non-empty state', () => {
        const state: DeepPartial<IGlobalStateSchema> = {
            profile: {
                error: 'error',
            },
        };
        expect(getProfileError(state as IGlobalStateSchema)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<IGlobalStateSchema> = {};
        expect(getProfileError(state as IGlobalStateSchema)).toEqual('');
    });
});
