import styled, { css } from 'styled-components'
import * as CardStyles from 'components/Card/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-template-rows: 1fr;
    gap: ${theme.spacings.normal};

    ${CardStyles.Wrapper} {
      width: 100%;
    }

    & a {
      text-decoration: none;
    }
  `}
`
