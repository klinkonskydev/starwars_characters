import { api } from 'services/api'
import HomeTemplate, { HomeTemplateProps } from 'templates/HomeTemplate'

export default function Home({ characters }: HomeTemplateProps) {
  return <HomeTemplate characters={characters} />
}

export const getStaticProps = async () => {
  const response = await api.get('/people/?page=1')
  const data = await response.data

  return {
    props: {
      characters: data
    }
  }
}
