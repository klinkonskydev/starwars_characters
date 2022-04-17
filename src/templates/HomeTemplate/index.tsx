import React, { useState } from 'react'
import getPeopleList from 'services/getPeopleList'

import { CharactersResponse } from 'types'

import CardList from 'components/CardList'
import Header from 'components/Header'
import NavigateBar from 'components/NavigateBar'

import * as S from './styles'

export type HomeTemplateProps = {
  characters: CharactersResponse
}

const HomeTemplate = ({ characters }: HomeTemplateProps) => {
  const [charactersData, setCharacters] = useState(() => characters)
  const [loading, setIsLoading] = useState(false)

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
  }

  return (
    <S.Wrapper>
      <Header />

      <CardList items={charactersData} />

      <NavigateBar
        count={charactersData.count}
        disabled={loading}
        onChange={handleChangePagination}
      />
    </S.Wrapper>
  )
}

export default HomeTemplate
