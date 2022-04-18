import HomeTemplate, { HomeTemplateProps } from 'templates/HomeTemplate'
import getPeopleList from 'services/getPeopleList'
import Head from 'next/head'

export default function Home({ characters }: HomeTemplateProps) {
  return (
    <>
      <Head>
        <title>Starwars characters</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
