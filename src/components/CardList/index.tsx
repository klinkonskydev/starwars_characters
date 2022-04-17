import Link from 'next/link'

import { CharactersResponse } from 'types'
import Card from 'components/Card'

import * as S from './styles'

type CardListProps = {
  items: CharactersResponse
}

const CardList = ({ items }: CardListProps) => {
  return (
    <S.Wrapper>
      {items?.results?.map(character => {
        const id = character.url.substring(0, character.url.length - 1).split('/').pop()
        return (
          <Link
            href={`/people/${id}`}
            key={character.name}
            passHref
          >
            <a>
            <Card
              name={character.name}
              homeworld={character.homeworld}
              gender={character.gender}
              eyeColor={character.eye_color}
              skinColor={character.skin_color}
              hairColor={character.hair_color}
            />
         </a>
         </Link>
        )
      })}
    </S.Wrapper>
  )
}

export default CardList
