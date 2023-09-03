import { IGlobalStateSchema } from 'app/providers/StoreProvider';
import {
    getArticlesDetailsData,
    getArticlesDetailsError,
    getArticlesDetailsLoading,
} from './articleDetails';

describe('articleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };
        const state: DeepPartial<IGlobalStateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticlesDetailsData(state as IGlobalStateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<IGlobalStateSchema> = {};
        expect(getArticlesDetailsData(state as IGlobalStateSchema)).toEqual(undefined);
    });
    test('should return error', () => {
        const state: DeepPartial<IGlobalStateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticlesDetailsError(state as IGlobalStateSchema)).toEqual('error');
    });
    test('should work with empty state error', () => {
        const state: DeepPartial<IGlobalStateSchema> = {};
        expect(getArticlesDetailsError(state as IGlobalStateSchema)).toEqual(undefined);
    });
    test('should return isLoading', () => {
        const state: DeepPartial<IGlobalStateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticlesDetailsLoading(state as IGlobalStateSchema)).toEqual(true);
    });
    test('should work with empty state isLoading', () => {
        const state: DeepPartial<IGlobalStateSchema> = {};
        expect(getArticlesDetailsLoading(state as IGlobalStateSchema)).toEqual(undefined);
    });
});
