import HomeTemplate, { HomeTemplateProps } from 'templates/HomeTemplate'
import getPeopleList from 'services/getPeopleList'

export default function Home({ characters }: HomeTemplateProps) {
  return <HomeTemplate characters={characters} />
}

export const getStaticProps = async () => {
  const characters = await getPeopleList()
  return {
    props: {
      characters
    }
  }
}
