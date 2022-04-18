import React, { useState } from 'react'
import { useRouter } from 'next/router'
import getPeopleList from 'services/getPeopleList'

import { CharactersResponse } from 'types'

import CardList from 'components/CardList'
import CardListSkeleton from 'components/CardList/skeleton'
import Header from 'components/Header'
import NavigateBar from 'components/NavigateBar'

import * as S from './styles'

export type HomeTemplateProps = {
  characters: CharactersResponse
}

const HomeTemplate = ({ characters }: HomeTemplateProps) => {
  const [charactersData, setCharacters] = useState(() => characters)
  const [loading, setIsLoading] = useState(false)

  const { push } = useRouter()

  const getCharacters = async (pageNumber: number) => {
    try {
      setIsLoading(true)
      const charactersResponse = await getPeopleList(pageNumber)
      setCharacters(charactersResponse)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChangePagination = (page: number) => {
    getCharacters(page)
    push({
      pathname: '/',
      query: {
        page
      }
    })
  }

  return (
    <S.Wrapper>
      <Header />

      {loading ? <CardListSkeleton /> : <CardList items={charactersData} />}

      <NavigateBar
        count={charactersData.count}
        disabled={loading}
        onChange={handleChangePagination}
      />
    </S.Wrapper>
  )
}

export default HomeTemplate
