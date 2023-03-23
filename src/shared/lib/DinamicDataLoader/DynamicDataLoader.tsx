import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { IStoreWithReducerManager } from 'app/providers/StoreProvider';
import { GlobalStateSchemaKey } from 'app/providers/StoreProvider/config/stateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
    [name in GlobalStateSchemaKey]?: Reducer
}

type ReducerListItem = [GlobalStateSchemaKey, Reducer]

interface IDynamicDataLoaderProps {
    reducers: ReducerList
    removeOnUnmount?: boolean
}

export const DynamicDataLoader: FC<IDynamicDataLoaderProps> = ({ children, reducers, removeOnUnmount }) => {
    const store = useStore() as IStoreWithReducerManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListItem) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@ADD ${name} reducer` });
        });

        return () => {
            if (removeOnUnmount) {
                Object.entries(reducers).forEach(([name]: ReducerListItem) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@REMOVE ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
