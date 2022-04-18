import Skeleton from '@mui/material/Skeleton'
import * as S from './styles'

const CharacterTemplate = () => {
  return (
      <S.Wrapper>
        <S.AvatarWrapper>
          <Skeleton animation="wave" variant="circular" width={274} height={274} />
          <Skeleton animation="wave" variant="text" width={119} height={20} />
          <Skeleton animation="wave" variant="rectangular" width={88} height={22} />
        </S.AvatarWrapper>
        <Skeleton animation="wave" variant="rectangular" width={392} height={502} />
      </S.Wrapper>
  )
}
export default CharacterTemplate
