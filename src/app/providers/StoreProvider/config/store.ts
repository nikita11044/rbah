import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { IGlobalStateSchema } from './stateSchema';

export function createReduxStore(initState?: IGlobalStateSchema) {
    const rootReducers: ReducersMapObject<IGlobalStateSchema> = {
        user: userReducer,
    };

    return configureStore<IGlobalStateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initState,
    });
}
