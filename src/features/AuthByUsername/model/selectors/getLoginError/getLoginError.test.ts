import { DeepPartial } from '@reduxjs/toolkit';
import { IGlobalStateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('should return error', () => {
        const state: DeepPartial<IGlobalStateSchema> = {
            login: {
                error: 'error',
            },
        };

        expect(getLoginError(state as IGlobalStateSchema)).toEqual('error');
    });
    test('should handle empty state', () => {
        const state: DeepPartial<IGlobalStateSchema> = {};

        expect(getLoginError(state as IGlobalStateSchema)).toEqual('');
    });
});
