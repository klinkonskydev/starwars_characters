import Skeleton from '@mui/material/Skeleton'

import * as S from './styles'

const CardSkeleton = () => (
  <S.Wrapper>
      <Skeleton animation="wave" variant="circular" width={63} height={63} />

      <S.Character>
        <Skeleton animation="wave" variant="text" height={24.5} width="60%" />
        <Skeleton animation="wave" variant="text" height={21} width="40%" />
      </S.Character>
  </S.Wrapper>
)

export default CardSkeleton
