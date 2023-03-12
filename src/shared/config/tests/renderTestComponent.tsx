import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nTestInstance from 'shared/config/i18n/i18nTestInstance';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { IGlobalStateSchema } from 'app/providers/StoreProvider/config/stateSchema';

export interface ITestComponentOptions {
    route?: string
    initialState?: DeepPartial<IGlobalStateSchema>
}

export function renderTestComponent(component: ReactNode, options: ITestComponentOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nTestInstance}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
