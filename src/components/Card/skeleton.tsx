import Skeleton from '@mui/material/Skeleton'

import * as S from './styles'

const CardSkeleton = () => (
  <S.Wrapper>
    <S.Content>
      <Skeleton animation="wave" variant="circular" width={63} height={63} />

      <div style={{ flex: 1, marginLeft: '1rem' }}>
        <Skeleton animation="wave" variant="text" height={24.5} width="60%" />
        <Skeleton animation="wave" variant="text" height={21} width="40%" />
      </div>
    </S.Content>
  </S.Wrapper>
)

export default CardSkeleton
