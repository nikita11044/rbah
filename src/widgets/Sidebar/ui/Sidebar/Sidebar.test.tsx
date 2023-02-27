import { fireEvent, screen } from '@testing-library/react';
import {
    renderWithTranslationProvider,
} from 'shared/lib/testing/renderWithTranslationProvider/renderWithTranslationProvider';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Sidebar renders', () => {
        renderWithTranslationProvider(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar renders', () => {
        renderWithTranslationProvider(<Sidebar />);
        const btn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
