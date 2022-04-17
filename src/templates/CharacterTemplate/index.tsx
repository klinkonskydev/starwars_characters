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
    starships: string[]
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
    <S.Wrapper>
      <S.AvatarWrapper>
        <Avatar
          hairColor={people.hair_color}
          skinColor={people.skin_color}
          gender={people.gender}
          eyeColor={people.eye_color}
        />
        <h2>Name: {people.name}</h2>
      </S.AvatarWrapper>
      <S.Content>
        <p>Gender: {people.gender}</p>
        <p>Hair Color: {people.hair_color}</p>
        <p>Skin Color: {people.skin_color}</p>
        <p>Height: {people.height}</p>
        <p>Mass: {people.birth_year}</p>
        <p>Birth Year: {people.mass}</p>
      </S.Content>
    </S.Wrapper>
  )
}
export default CharacterTemplate
