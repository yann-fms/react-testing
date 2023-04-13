import { render,screen } from "@testing-library/react"
import Greet from './greet';

test('Geet renders correctly', () =>{
    render(<Greet />)
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
})