import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { IGlobalStateSchema } from 'app/providers/StoreProvider/config/stateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface IStoreProviderProps {
    children?: ReactNode,
    initialState?: DeepPartial<IGlobalStateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<IGlobalStateSchema>>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: IStoreProviderProps) => {
    const navigate = useNavigate();

    const store = createReduxStore(
        initialState as IGlobalStateSchema,
        asyncReducers as ReducersMapObject<IGlobalStateSchema>,
        navigate,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
