import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import Card from '.'

jest.mock('components/Avatar', () => ({
  __esModule: true,
  default: () => <div data-testid="mock avatar" />
}))

describe('<Card />', () => {
  it('should render the correctly', () => {
    render(
      <Card
        name="klinkonsky"
        homeworld="terra"
        skinColor="Light"
        hairColor="Red"
        eyeColor="Blue"
      />
    )

    expect(
      screen.getByRole('heading', { name: /klinkonsky/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/homeworld: terra/i)).toBeInTheDocument()

    expect(screen.getByTestId(/mock avatar/i)).toBeInTheDocument()
  })
})
