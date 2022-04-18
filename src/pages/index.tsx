import HomeTemplate, { HomeTemplateProps } from 'templates/HomeTemplate'
import getPeopleList from 'services/getPeopleList'
import Head from 'next/head'
import {GetServerSideProps} from 'next'

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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const characters = await getPeopleList(Number(query.page || 1))

  return {
    props: {
      characters
    }
  }
}
