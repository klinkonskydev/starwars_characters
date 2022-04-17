import styled, { css } from 'styled-components'

import Container from 'components/Container'
import * as AvatarStyles from 'components/Avatar/styles'

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  ${AvatarStyles.AvatarsWrapper} {
    width: 100%;
    height: 100%;
  }
`

export const AvatarWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: ${theme.spacings.normal};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    border: 1px solid red;
    padding: 0 ${theme.spacings.normal};
  `}
`
