import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import HomeTemplate from '.'

jest.mock('components/Header', () => ({
  __esModule: true,
  default: () => <div data-testid="mock CardList" />
}))

jest.mock('components/CardList', () => ({
  __esModule: true,
  default: () => <div data-testid="mock Header" />
}))

describe('<HomeTemplate />', () => {
  it('should render the heading', () => {
    render(<HomeTemplate />)

    expect(screen.getByTestId(/mock header/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock cardlist/i)).toBeInTheDocument()
  })
})
