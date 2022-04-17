import Avatar from 'avataaars'
import firstLetterUppercase from 'utils/first-letter-uppercase'

import { AvatarProps } from 'types'
import * as S from './styles'

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

      {...(gender === 'n/a'
        ? { topType: 'NoHair' }
        : gender === 'male'
        ? { topType: 'ShortHairShortFlat' }
        : {
            topType: 'LongHairCurvy',
            clotheType: 'ShirtScoopNeck',
            clotheColor: 'Pink'
          })}

      {...(!!hairColor && !!gender
        ? { hairColor: firstLetterUppercase(hairColor) }
        : {})}
    />
  </S.AvatarsWrapper>
)

export default AvatarComponent
