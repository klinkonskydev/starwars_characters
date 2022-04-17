import Avatar from 'components/Avatar'
import { AvatarProps } from 'types'

import * as S from './styles'

export type CardProps = {
  name: string
  homeworld: string
} & AvatarProps

const Card = ({
  name,
  homeworld,
  skinColor,
  hairColor,
  eyeColor,
  gender,
  mouth = 'Serious'
}: CardProps) => (
  <S.Wrapper>
    <S.Content>
      <Avatar
        mouth={mouth}
        hairColor={hairColor}
        skinColor={skinColor}
        gender={gender}
        eyeColor={eyeColor}
      />

      <div>
        <S.Heading>{name}</S.Heading>
        <S.Paragraph>Homeworld: {homeworld}</S.Paragraph>
      </div>
    </S.Content>
  </S.Wrapper>
)

export default Card
