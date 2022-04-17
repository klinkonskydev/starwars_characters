import axios from 'axios'
import Header from 'components/Header'
import PeopleSkeleton from 'components/PeopleSkeleton'
import { GetStaticProps } from 'next'
import {useRouter} from 'next/router'
import { api } from 'services/api'
import CharacterTemplate, { CharacterProps } from 'templates/CharacterTemplate'

const Character = ({ people }: CharacterProps) => {
  const router = useRouter();

  return (
    <>
      <Header />
      {router.isFallback ? <PeopleSkeleton /> : <CharacterTemplate people={people} />}
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

  const filmsPromises = data.films.map(url => axios.get(url))
  const films = (await Promise.all(filmsPromises)).map((film) => film.data.title)
  console.log(films)

  return {
    props: {
      people: data
    }
  }
}

export default Character
