import HomeTemplate, { HomeTemplateProps } from 'templates/HomeTemplate'
import getPeopleList from 'services/getPeopleList'
import Head from 'next/head'

export default function Home({ characters }: HomeTemplateProps) {
  return (
    <>
      <Head>
        <title>Starwars characters</title>
      </Head>
      <HomeTemplate characters={characters} />
    </>
  )
}

export const getStaticProps = async () => {
  const characters = await getPeopleList()
  return {
    props: {
      characters
    }
  }
}
