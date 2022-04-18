import styled, { css } from 'styled-components'
import * as CardStyles from 'components/Card/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.normal};

    ${CardStyles.Wrapper} {
      width: 100%;
    }

    @media (min-width: 550px) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
      grid-template-rows: auto;
    }

    & a {
      text-decoration: none;
    }
  `}
`
