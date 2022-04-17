import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import CharacterTemplate from '.'

const props = {
  name: 'Matheus klinkonsky',
  gender: 'male',
  hair_color: 'black',
  skin_color: 'brown'
}

describe('<CharacterTemplate />', () => {
  it('should render the heading', () => {
    render(<CharacterTemplate {...props} />)

    expect(screen.getByText(`Name: ${props.name}`)).toBeInTheDocument()
    expect(screen.getByText(`Gender: ${props.gender}`)).toBeInTheDocument()
    expect(screen.getByText(`Hair Color: ${props.hair_color}`)).toBeInTheDocument()
    expect(screen.getByText(`Skin Color: ${props.skin_color}`)).toBeInTheDocument()
  })
})
