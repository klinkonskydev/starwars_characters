import * as S from './styles'
import Skeleton from '@mui/material/Skeleton';

const PeopleSkeleton = () => (
  <S.Wrapper>
      <Skeleton variant="circular" width={300} height={300} />
      <Skeleton variant="rectangular" width={210} height={118} />
  </S.Wrapper>
)

export default PeopleSkeleton
