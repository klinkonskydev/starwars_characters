import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'

import Avatar from 'components/Avatar'
import Head from 'next/head'
import * as S from './styles'

export type CharacterProps = { people: {
    name: string
    gender: 'male' | 'female' | 'n/a'
    skin_color: string
    eye_color: string
    height: string
    mass: string
    birth_year: string
    films: string[]
    species: string[]
    starships: string[]
    vehicles: string[]
    homeworld: string
    hair_color:
      | 'Auburn'
      | 'Black'
      | 'Blonde'
      | 'BondeGolden'
      | 'PastelPink'
      | 'Blue'
      | 'Platinum'
      | 'Red'
      | 'SilverGray'
  }
}

const CharacterTemplate = ({ people }: CharacterProps) => {
  return (
    <>
      <Head>
        <title>Character - {people.name}</title>
      </Head>
      <S.Wrapper>
        <S.AvatarWrapper>
          <Avatar
            hairColor={people.hair_color}
            skinColor={people.skin_color}
            gender={people.gender}
            eyeColor={people.eye_color}
          />
          <S.Heading>{people.name}</S.Heading>
          <S.Link href="/">
            <S.Button variant="outlined" startIcon={<ArrowLeftIcon />}>
              voltar
            </S.Button>
          </S.Link>
        </S.AvatarWrapper>
        <S.Content>
          <div>
            <S.Paragraph>Gender: </S.Paragraph>
            <S.Paragraph>{people.gender}</S.Paragraph>
          </div>
          <div>
            <S.Paragraph>Hair Color: </S.Paragraph>
            <S.Paragraph>{people.hair_color}</S.Paragraph>
          </div>
          <div>
            <S.Paragraph>Skin Color: </S.Paragraph>
            <S.Paragraph>{people.skin_color}</S.Paragraph>
          </div>
          <div>
            <S.Paragraph>Height: </S.Paragraph>
            <S.Paragraph>{people.height}</S.Paragraph>
          </div>
          <div>
            <S.Paragraph>Birth Year: </S.Paragraph>
            <S.Paragraph>{people.birth_year}</S.Paragraph>
          </div>
          <div>
            <S.Paragraph>Mass: </S.Paragraph>
            <S.Paragraph>{people.mass}</S.Paragraph>
          </div>
          <div>
            <S.Paragraph>Homeword: </S.Paragraph>
            <S.Paragraph>{people.homeworld}</S.Paragraph>
          </div>
          {!!people.films.length && (
            <section>
              <S.Paragraph>Films: </S.Paragraph>
              <S.Paragraph>{people.films.join(', ')}</S.Paragraph>
            </section>
          )}
          {!!people.species.length && (
            <section>
              <S.Paragraph>Species: </S.Paragraph>
              <S.Paragraph>{people.species.join(', ')}</S.Paragraph>
            </section>
          )}
          {!!people.starships.length && (
            <section>
              <S.Paragraph>Starships: </S.Paragraph>
              <S.Paragraph>{people.starships.join(', ')}</S.Paragraph>
            </section>
          )}
          {!!people.vehicles.length && (
            <section>
              <S.Paragraph>Vehicles: </S.Paragraph>
              <S.Paragraph>{people.vehicles.join(', ')}</S.Paragraph>
            </section>
          )}
        </S.Content>
      </S.Wrapper>
    </>
  )
}
export default CharacterTemplate
