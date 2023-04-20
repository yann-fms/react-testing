import { render, screen, logRoles } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'Javascript']

  test('renders correctly', () => {
    render(<Skills skills={skills} />)

    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />)

    const listItemElement = screen.getAllByRole('listitem')
    expect(listItemElement).toHaveLength(skills.length)
  })
  test('renders Login Button', () => {
    render(<Skills skills={skills} />)
    const buttonElement = screen.getByRole('button', {
      name: 'Login',
    })
    expect(buttonElement).toBeInTheDocument()
  })
  test('Start learning button is not rendered', () => {
    render(<Skills skills={skills} />)
    const buttonElementStartLearning = screen.queryByRole('button', {
      name: 'Start learning',
    })
    expect(buttonElementStartLearning).not.toBeInTheDocument()
  })
  test('Start learning button is eventially displayed', async () => {
    const view = render(<Skills skills={skills} />)
    //! logRles is useful to find the roles in the dom to use getByRole, queryByRole or findByRole with their attributes "name"
    logRoles(view.container)
    // screen.debug();
    const buttoneventuallydisplayed = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 2000,
      }
    )
    // screen.debug();

    expect(buttoneventuallydisplayed).toBeInTheDocument()
  })
})
