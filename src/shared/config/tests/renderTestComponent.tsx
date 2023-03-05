import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nTestInstance from 'shared/config/i18n/i18nTestInstance';
import { MemoryRouter } from 'react-router-dom';

export interface ITestComponentOptions {
    route?: string
}

export function renderTestComponent(component: ReactNode, options: ITestComponentOptions = {}) {
    const {
        route = '/',
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nTestInstance}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}
