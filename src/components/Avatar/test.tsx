import { render } from 'utils/test-utils'

import Avatar from '.'

describe('<Avatar />', () => {
  it('should render the heading', () => {
    render(<Avatar skinColor="Light" hairColor="Red" eyecolor="Blue" />)

    expect(document.getElementById('Avataaar')).toBeInTheDocument()
    expect(document.getElementById('Eye')).toHaveStyle({ fill: 'Blue' })
  })
})
