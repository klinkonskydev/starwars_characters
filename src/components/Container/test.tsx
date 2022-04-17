import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import Container from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    render(<Container />)
  })
})
