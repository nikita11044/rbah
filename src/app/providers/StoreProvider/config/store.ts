import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { IGlobalStateSchema } from './stateSchema';

export function createReduxStore(initState?: IGlobalStateSchema) {
    const rootReducers: ReducersMapObject<IGlobalStateSchema> = {
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<IGlobalStateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
