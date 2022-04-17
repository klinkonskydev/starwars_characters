import { api } from './api'
import { CharactersResponse } from 'types'

export default async function getPeopleList(pageNumber = 1) {
  const response = await api.get(`/people/?page=${pageNumber}`)
  const data: CharactersResponse = await response.data

  const homeworlds = await Promise.all(
    data.results.map(async character => {
      const homeworldResponse = await api.get(character.homeworld)
      const name = await homeworldResponse.data.name

      return name
    })
  )

  const characters = data.results.map((character, index) => {
    return {
      ...character,
      homeworld: homeworlds[index]
    }
  })

  return { ...data, results: characters }
}
