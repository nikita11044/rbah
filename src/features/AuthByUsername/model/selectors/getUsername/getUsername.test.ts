import { IGlobalStateSchema } from 'app/providers/StoreProvider';
import { getUsername } from './getUsername';

describe('getUsername', () => {
    test('should return username', () => {
        const state: DeepPartial<IGlobalStateSchema> = {
            login: {
                username: 'username',
            },
        };

        expect(getUsername(state as IGlobalStateSchema)).toEqual('username');
    });
    test('should handle empty state', () => {
        const state: DeepPartial<IGlobalStateSchema> = {};

        expect(getUsername(state as IGlobalStateSchema)).toEqual('');
    });
});
