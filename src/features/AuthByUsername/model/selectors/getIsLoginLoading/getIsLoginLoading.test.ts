import { IGlobalStateSchema } from 'app/providers/StoreProvider';
import { getIsLoginLoading } from './getIsLoginLoading';

describe('getIsLoginLoading', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<IGlobalStateSchema> = {
            login: {
                isLoading: true,
            },
        };

        expect(getIsLoginLoading(state as IGlobalStateSchema)).toEqual(true);
    });
    test('should handle empty state', () => {
        const state: DeepPartial<IGlobalStateSchema> = {};

        expect(getIsLoginLoading(state as IGlobalStateSchema)).toEqual(false);
    });
});
