import axios from 'axios'
import Header from 'components/Header'
import PeopleSkeleton from 'templates/CharacterTemplate/skeleton'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { api } from 'services/api'
import CharacterTemplate, { CharacterProps } from 'templates/CharacterTemplate'

const Character = ({ people }: CharacterProps) => {
  const router = useRouter()

  return (
    <>
      <Header />
      {router.isFallback ? (
        <PeopleSkeleton />
      ) : (
        <CharacterTemplate people={people} />
      )}
    </>
  )
}

export async function getStaticPaths() {
  const response = await api.get('/people/?page=1')
  const data = await response.data

  const paths = data.results.map(({ url }: { url: string }) => {
    const id = url
      .substring(0, url.length - 1)
      .split('/')
      .pop()
    return { params: { id } }
  })

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await api.get(`/people/${params?.id}`)
  const data = await response.data

  const getData = async (array: string[], key: string) => {
    const arrayPromisses = array.map(url => axios.get(url))
    const response = (await Promise.all(arrayPromisses)).map(
      res => res.data[key]
    )

    return response
  }

  const films = await getData(data.films, 'title')
  const homeworld = (await axios.get(data.homeworld)).data.name
  const starships = await getData(data.starships, 'name')
  const vehicles = await getData(data.vehicles, 'name')
  const species = await getData(data.species, 'name')

  return {
    props: {
      people: {
        ...data,
        films,
        homeworld,
        starships,
        vehicles,
        species
      }
    }
  }
}

export default Character
