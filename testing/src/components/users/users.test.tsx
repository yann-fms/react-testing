import { render, screen } from '@testing-library/react';
import  Users  from './Users'
import { server } from '../../mocks/server';
import { rest } from 'msw';

describe('Users', () => {
    test('title render correctly', () => {
        render(<Users/>)
        const heading = screen.getByRole('heading', {
            name: 'Users'
        })
        expect(heading).toBeInTheDocument();
    })
    test('list render correctly', async () => {
        render(<Users/>)
        const users = await screen.findAllByRole('listitem');
      
        expect(users).toHaveLength(3);
    })
    test('render error', async () => {
        server.use(
            rest.get('https://jsonplaceholder.typicode.com/users',
            (req, res, ctx) => {
                return res(ctx.status(500))
            })
        );
        render(<Users/>)
        const errorElement = await screen.findByText('error fetch users');
        expect(errorElement).toBeInTheDocument();
    })
})