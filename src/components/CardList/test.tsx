import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import items from './mock'

import CardList from '.'

jest.mock('components/Card', () => ({
  __esModule: true,
  default: () => <div data-testid="mock card" />
}))

describe('<CardList />', () => {
  it('should render the heading', () => {
    render(<CardList items={items} />)

    expect(screen.getAllByTestId(/mock card/i)).toHaveLength(
      items.results.length
    )
  })
})
