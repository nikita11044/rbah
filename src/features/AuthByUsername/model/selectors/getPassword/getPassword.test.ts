import { IGlobalStateSchema } from 'app/providers/StoreProvider';
import { getPassword } from './getPassword';

describe('getIsLoginLoading', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<IGlobalStateSchema> = {
            login: {
                password: 'pswd',
            },
        };

        expect(getPassword(state as IGlobalStateSchema)).toEqual('pswd');
    });
    test('should handle empty state', () => {
        const state: DeepPartial<IGlobalStateSchema> = {};

        expect(getPassword(state as IGlobalStateSchema)).toEqual('');
    });
});
