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
      <S.Content style={{ boxShadow: 'none', border: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton animation="wave" variant="text" width={58} height={20} />
          <Skeleton animation="wave" variant="text" width={58} height={20} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton animation="wave" variant="text" width={58} height={20} />
          <Skeleton animation="wave" variant="text" width={58} height={20} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton animation="wave" variant="text" width={58} height={20} />
          <Skeleton animation="wave" variant="text" width={58} height={20} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton animation="wave" variant="text" width={58} height={20} />
          <Skeleton animation="wave" variant="text" width={58} height={20} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton animation="wave" variant="text" width={58} height={20} />
          <Skeleton animation="wave" variant="text" width={58} height={20} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton animation="wave" variant="text" width={58} height={20} />
          <Skeleton animation="wave" variant="text" width={58} height={20} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton animation="wave" variant="text" width={58} height={20} />
          <Skeleton animation="wave" variant="text" width={58} height={20} />
        </div>
        <section style={{ display: 'flex', flexDirection: 'column' }}>
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
