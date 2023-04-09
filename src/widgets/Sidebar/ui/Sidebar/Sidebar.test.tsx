import { fireEvent, screen } from '@testing-library/react';
import { renderTestComponent } from 'shared/lib/tests/renderTestComponent';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Sidebar renders', () => {
        renderTestComponent(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar renders', () => {
        renderTestComponent(<Sidebar />);
        const btn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
