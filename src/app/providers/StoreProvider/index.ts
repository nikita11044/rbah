import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import { IGlobalStateSchema, IStoreWithReducerManager } from './config/stateSchema';

export {
    StoreProvider,
    createReduxStore,
    IGlobalStateSchema,
    IStoreWithReducerManager,
    AppDispatch,
};
