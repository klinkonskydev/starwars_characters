import { CharactersResponse } from 'types'

const mock: CharactersResponse = {
  count: 80,
  results: [
    {
      name: 'matheus',
      homeworld: 'terra',
      gender: 'male',
      url: 'htts://mock',
      eye_color: 'blue'
    },
    {
      name: 'klinkonsky',
      homeworld: 'marte',
      gender: 'male',
      url: 'htts://mock',
      eye_color: 'blue'
    },
    {
      name: 'Igor',
      homeworld: 'plutão',
      url: 'htts://mock',
      gender: 'male',
      eye_color: 'blue'
    }
  ],
  next: '1',
  previous: '3'
}

export default mock
