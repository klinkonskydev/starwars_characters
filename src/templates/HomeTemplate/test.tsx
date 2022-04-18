import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'
import { CharactersResponse } from 'types'

import HomeTemplate from '.'

jest.mock('components/Header', () => ({
  __esModule: true,
  default: () => <div data-testid="mock Header" />
}))

jest.mock('components/CardList', () => ({
  __esModule: true,
  default: () => <div data-testid="mock CardList" />
}))

jest.mock('components/CardList/skeleton', () => ({
  __esModule: true,
  default: () => <div data-testid="mock CardListSkeleton" />
}))

jest.mock('components/NavigateBar', () => ({
  __esModule: true,
  default: () => <div data-testid="mock NavigateBar" />
}))

const items: CharactersResponse = {
  count: 0,
  results: [],
  previous: '',
  next: ''
}

describe('<HomeTemplate />', () => {
  it('should render the heading', () => {
    render(<HomeTemplate characters={items} />)

    expect(screen.getByTestId(/mock header/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock CardList/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock NavigateBar/i)).toBeInTheDocument()
  })
})
