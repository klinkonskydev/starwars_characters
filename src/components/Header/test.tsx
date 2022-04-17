import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import Header from '.'

describe('<Header />', () => {
  it('should render the heading', () => {
    render(<Header />)

    expect(screen.getByRole('img', { name: /star wars logo/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /star wars characters/i })).toBeInTheDocument()
    expect(screen.getByText('A list of all Star Wars characters.')).toBeInTheDocument()
  })
})
