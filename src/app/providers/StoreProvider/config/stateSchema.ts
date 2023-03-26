import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { IProfileSchema } from 'entities/Profile';

export interface IGlobalStateSchema {
    user: IUserSchema,

    // Async reducers
    login?: ILoginSchema
    profile?: IProfileSchema
}

export type GlobalStateSchemaKey = keyof IGlobalStateSchema

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IGlobalStateSchema>,
    reduce: (state: IGlobalStateSchema, action: AnyAction) => CombinedState<IGlobalStateSchema>,
    add: (key: GlobalStateSchemaKey, reducer: Reducer) => void
    remove: (key: GlobalStateSchemaKey) => void
}

export interface IStoreWithReducerManager extends EnhancedStore<IGlobalStateSchema> {
    reducerManager: IReducerManager
}
