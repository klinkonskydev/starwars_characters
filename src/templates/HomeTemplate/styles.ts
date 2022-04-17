import styled, { css } from 'styled-components'

import Container from 'components/Container'
import * as HeaderStyles from 'components/Header/styles'
import * as NavigateBarStyles from 'components/NavigateBar/styles'

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
      ${HeaderStyles.Wrapper} {
        padding: ${theme.spacings.big} 0;
      }

      ${NavigateBarStyles.Wrapper} {
          margin: ${theme.spacings.big};
      }
  `}
`
