import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <S.Image src="/images/logo.svg" width={150} height={80} alt="star wars logo" />
    <S.Heading>🛸 STAR WARS CHARACTERS</S.Heading>
    <S.Phrase>A list of all Star Wars characters.</S.Phrase>
  </S.Wrapper>
)

export default Header
