import firstLetterUppercase from 'utils/first-letter-uppercase'

import { AvatarProps } from 'types'
import * as S from './styles'

const avatarStyle = {
  'n/a': {
    topType: 'NoHair'
  },

  male: {
    topType: 'ShortHairShortFlat'
  },

  female: {
    topType: 'LongHairCurvy',
    clotheType: 'ShirtScoopNeck',
    clotheColor: 'Pink'
  }
}

const AvatarComponent = ({
  skinColor,
  hairColor,
  eyecolor,
  gender,
  mouth = 'Serious'
}: AvatarProps) => (
  <S.AvatarsWrapper eyecolor={eyecolor}>
    <S.Avatar
      avatarStyle="Circle"
      skinColor={firstLetterUppercase(skinColor)}
      mouthType={mouth}
      {...(!!gender && avatarStyle[gender])}
      {...(!!hairColor && !!gender
        ? { hairColor: firstLetterUppercase(hairColor) }
        : {})}
    />
  </S.AvatarsWrapper>
)

export default AvatarComponent
