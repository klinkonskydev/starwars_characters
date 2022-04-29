import Avatar from 'avataaars'
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
  eyeColor,
  gender,
  mouth = 'Serious'
}: AvatarProps) => (
  <S.AvatarsWrapper eyeColor={eyeColor}>
    <Avatar
      style={{ width: '100%', height: '100%' }}
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
