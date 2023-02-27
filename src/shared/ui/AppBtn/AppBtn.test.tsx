import { render, screen } from '@testing-library/react';
import { AppBtn, AppButtonTheme } from './AppBtn';

describe('AppBtn', () => {
    test('AppBtn renders', () => {
        render(<AppBtn>AppBtn</AppBtn>);
        expect(screen.getByText('AppBtn')).toBeInTheDocument();
    });

    test('AppBtn has the right theme class', () => {
        render(<AppBtn theme={AppButtonTheme.CLEAR}>AppBtn</AppBtn>);
        expect(screen.getByText('AppBtn')).toHaveClass('clear');
        screen.debug();
    });
});
