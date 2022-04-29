import Skeleton from '@mui/material/Skeleton'
import * as S from './styles'

const CharacterTemplate = () => {
  return (
    <S.Wrapper>
      <S.AvatarWrapper>
        <Skeleton
          animation="wave"
          variant="circular"
          width={274}
          height={274}
        />
        <Skeleton animation="wave" variant="text" width={119} height={20} />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={88}
          height={22}
        />
      </S.AvatarWrapper>
      <S.Content>
        {Array(7)
          .fill(0)
          .map((_, index) => (
            <div key={index}>
              <Skeleton
                animation="wave"
                variant="text"
                width={'50%'}
                height={20}
              />
              <Skeleton
                animation="wave"
                variant="text"
                width={'45%'}
                height={20}
              />
            </div>
          ))}

        <section>
          <Skeleton
            animation="wave"
            variant="text"
            width={58}
            height={20}
            style={{ margin: '0 auto' }}
          />
          <Skeleton
            animation="wave"
            variant="text"
            width={100}
            height={20}
            style={{ margin: '0 auto' }}
          />
        </section>
      </S.Content>
    </S.Wrapper>
  )
}
export default CharacterTemplate
