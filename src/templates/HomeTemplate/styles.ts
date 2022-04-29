import { styled } from '@mui/material/styles'

import Container from 'components/Container'
import * as HeaderStyles from 'components/Header/styles'
import * as NavigateBarStyles from 'components/NavigateBar/styles'

export const Wrapper = styled(Container)(
  ({ theme }) => `
      ${HeaderStyles.Wrapper} {
        padding: ${theme.spacings.big} 0;
      }

      ${NavigateBarStyles.Wrapper} {
          margin: ${theme.spacings.big};
      }
`
)
