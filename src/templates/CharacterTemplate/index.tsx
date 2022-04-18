import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'

import Avatar from 'components/Avatar'
import * as S from './styles'

export type CharacterProps = {
  people: {
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
  console.log(people)
  return (
    <S.Wrapper>
      <S.AvatarWrapper>
        <Avatar
          hairColor={people.hair_color}
          skinColor={people.skin_color}
          gender={people.gender}
          eyeColor={people.eye_color}
        />
        <h2>Name: {people.name}</h2>
        <S.Link href="/">
          <S.Button variant="outlined" startIcon={<ArrowLeftIcon />}>voltar</S.Button>
        </S.Link>
      </S.AvatarWrapper>
      <S.Content>
        <S.Paragraph>Gender: {people.gender}</S.Paragraph>
        <S.Paragraph>Hair Color: {people.hair_color}</S.Paragraph>
        <S.Paragraph>Skin Color: {people.skin_color}</S.Paragraph>
        <S.Paragraph>Height: {people.height}</S.Paragraph>
        <S.Paragraph>Birth Year: {people.birth_year}</S.Paragraph>
        <S.Paragraph>Mass: {people.mass}</S.Paragraph>
        <S.Paragraph>Homeword: {people.homeworld}</S.Paragraph>
        {!!people.films.length && (
          <S.Paragraph>Films: {people.films.join(', ')}</S.Paragraph>
        )}
        {!!people.species.length && (
          <S.Paragraph>Species: {people.species.join(', ')}</S.Paragraph>
        )}
        {!!people.starships.length && (
          <S.Paragraph>Starships: {people.starships.join(', ')}</S.Paragraph>
        )}
        {!!people.vehicles.length && (
          <S.Paragraph>Vehicles: {people.vehicles.join(', ')}</S.Paragraph>
        )}
      </S.Content>
    </S.Wrapper>
  )
}
export default CharacterTemplate
