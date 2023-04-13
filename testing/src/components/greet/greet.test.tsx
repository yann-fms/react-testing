/**
 * Great chould render the text "Hello" and if a name is passed into the component
 * It should rendre "hello" followed by the ame assed to the component
 */

import { render, screen } from "@testing-library/react"
import Greet from "./greet"

test('Greet render correctly', ()=>{
    render(<Greet />)
   const textElement = screen.getByText('Hello')
   expect(textElement).toBeInTheDocument();

})

test('Greet render with a name', () => {
    render(<Greet name='John'/>)
    const textElement = screen.getByText('Hello John')
    expect(textElement).toBeInTheDocument();
})