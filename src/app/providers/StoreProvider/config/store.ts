import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { IGlobalStateSchema } from './stateSchema';

export function createReduxStore(
    initState?: IGlobalStateSchema,
    asyncReducers?: ReducersMapObject<IGlobalStateSchema>,
) {
    const rootReducers: ReducersMapObject<IGlobalStateSchema> = {
        ...asyncReducers,
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

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
