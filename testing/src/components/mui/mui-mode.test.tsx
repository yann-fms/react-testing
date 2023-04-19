import { render, screen } from '@testing-library/react';
import { MuiMode } from './MuiMode'
import { AppProviders } from '../../providers/AppProviders';

describe('Mui', () => {
    test('render test correctly', () => {
        render(<MuiMode/>, {
            wrapper: AppProviders
        })
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent("dark mode")
    })
})