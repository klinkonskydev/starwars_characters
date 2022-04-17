import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import PeopleSkeleton from '.'

describe('<PeopleSkeleton />', () => {
  it('should render the heading', () => {
    render(<PeopleSkeleton />)

    expect(screen.getByRole('heading', { name: /PeopleSkeleton/i })).toBeInTheDocument()
  })
})
