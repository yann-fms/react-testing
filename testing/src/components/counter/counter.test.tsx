import { render, screen, logRoles } from '@testing-library/react'
import user from '@testing-library/user-event'
import Counter from './Counter'

describe('counter', () => {
  test('counter renders correctly', () => {
    render(<Counter />)
    const counterElement = screen.getByRole('heading')
    expect(counterElement).toBeInTheDocument()
  })
  test('button render correctly', () => {
    render(<Counter />)
    const incrementButton = screen.getByRole('button', { name: /increment/i })
    expect(incrementButton).toBeInTheDocument()
  })
  test('renders a count of 0', () => {
    render(<Counter />)
    const counterToZero = Number(screen.getByRole('heading').textContent)
    expect(counterToZero).toBe(0)
  })
  //! same as above
  test('renders a count of zéro', () => {
    render(<Counter />)
    const counterToZero = screen.getByRole('heading')
    expect(counterToZero).toHaveTextContent('0')
  })
  test('renders a count of 1 after clicking increment button', async () => {
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole('button', { name: /increment/i })
    await user.click(incrementButton)
    const counterToOne = screen.getByRole('heading')
    expect(counterToOne).toHaveTextContent('1')
  })
  test('renders a count of 2 after clicking increment button', async () => {
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole('button', { name: /increment/i })
    await user.dblClick(incrementButton)
    const counterToTwo = screen.getByRole('heading')
    expect(counterToTwo).toHaveTextContent('2')
  })
  test('renders a count of 10 after clicking the set button', async () => {
    user.setup()
    render(<Counter />)
    const setButtontElement = screen.getByRole('button', { name: /set/i })
    expect(setButtontElement).toBeInTheDocument()
    const amountInput = screen.getByRole('spinbutton')
    await user.type(amountInput, '10')
    expect(amountInput).toHaveValue(10)
    await user.click(setButtontElement)
    const counterToTen = screen.getByRole('heading')
    expect(counterToTen).toHaveTextContent('10')
  })
  test('elements are focused in the right order', async () => {
    user.setup()
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    const incrementButton = screen.getByRole('button', { name: /increment/i })
    const decrementButton = screen.getByRole('button', { name: /decrement/i })
    const setButtontElement = screen.getByRole('button', { name: /set/i })
    await user.tab()
    expect(incrementButton).toHaveFocus()
    await user.tab()
    expect(decrementButton).toHaveFocus()
    await user.tab()
    expect(amountInput).toHaveFocus()
    await user.tab()
    expect(setButtontElement).toHaveFocus()
  })
})
