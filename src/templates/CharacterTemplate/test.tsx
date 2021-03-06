import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import CharacterTemplate, {CharacterProps} from '.'

const props: CharacterProps = {
  people: {
    name: 'Matheus klinkonsky',
    gender: "female",
    hair_color: 'Black',
    skin_color: 'brown',
    eye_color: 'blue',
    height: '180',
    mass: '70',
    birth_year: '20',
    films: ['todo mundo em panico'],
    species: ['dog'],
    starships: ['moto'],
    vehicles: ['car'],
    homeworld: 'terra'
  }
}

describe('<CharacterTemplate />', () => {
  it('should render the heading', () => {
    render(<CharacterTemplate {...props} />)

    expect(screen.getByText(props.people.gender)).toBeInTheDocument()
    expect(
      screen.getByText(props.people.hair_color)
    ).toBeInTheDocument()
    expect(
      screen.getByText(props.people.skin_color)
    ).toBeInTheDocument()

    expect(
      screen.getByText(props.people.height)
    ).toBeInTheDocument()

    expect(
      screen.getByText(props.people.birth_year)
    ).toBeInTheDocument()

    expect(
      screen.getByText(props.people.mass)
    ).toBeInTheDocument()

    expect(
      screen.getByText(props.people.films[0])
    ).toBeInTheDocument()

    expect(
      screen.getByText(props.people.species[0])
    ).toBeInTheDocument()

    expect(
      screen.getByText(props.people.starships[0])
    ).toBeInTheDocument()

    expect(
      screen.getByText(props.people.vehicles[0])
    ).toBeInTheDocument()

  })
})
