import Link from 'next/link'
import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <Link href="/">
      <S.Image src="/images/logo.svg" alt="star wars logo" />
    </Link>
    <S.Heading>🛸 STAR WARS CHARACTERS</S.Heading>
    <S.Phrase>A list of all Star Wars characters.</S.Phrase>
  </S.Wrapper>
)

export default Header
