import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { IGlobalStateSchema } from 'app/providers/StoreProvider/config/stateSchema';
import { DeepPartial } from '@reduxjs/toolkit';

interface IStoreProviderProps {
    children?: ReactNode,
    initialState?: DeepPartial<IGlobalStateSchema>
}

export const StoreProvider = ({ children, initialState }: IStoreProviderProps) => {
    const store = createReduxStore(initialState as IGlobalStateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
