import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { IGlobalStateSchema } from 'app/providers/StoreProvider/config/stateSchema';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

interface IStoreProviderProps {
    children?: ReactNode,
    initialState?: DeepPartial<IGlobalStateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<IGlobalStateSchema>>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: IStoreProviderProps) => {
    const store = createReduxStore(
        initialState as IGlobalStateSchema,
        asyncReducers as ReducersMapObject<IGlobalStateSchema>,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
