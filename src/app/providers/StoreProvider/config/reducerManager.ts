import {
    AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { IGlobalStateSchema, GlobalStateSchemaKey, IReducerManager } from './stateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<IGlobalStateSchema>):IReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    const keysToRemove: GlobalStateSchemaKey[] = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state: IGlobalStateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
            }
            return combinedReducer(state, action);
        },
        add: (key: GlobalStateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },
        remove: (key: GlobalStateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
