import CardSkeleton from 'components/Card/skeleton'

import * as S from './styles'

const arr = Array(10).fill(0)

const CardListSkeleton = () => {
  return (
    <S.Wrapper>
      {arr.map((el, index) => (
        <CardSkeleton key={index} />
      ))}
    </S.Wrapper>
  )
}

export default CardListSkeleton
