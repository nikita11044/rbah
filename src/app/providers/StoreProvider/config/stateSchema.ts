import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { IProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { To } from '@remix-run/router';
import { NavigateOptions } from 'react-router';

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

interface IThunkExtra {
    api: AxiosInstance,
    navigate: (to: To, options?: NavigateOptions) => void,
}

export interface IThunkOptions<T> {
    rejectValue: T
    extra: IThunkExtra
}
