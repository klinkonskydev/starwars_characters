import styled, { css } from 'styled-components'

import NextLink from 'next/link'
import { Button as MUIButton } from '@mui/material'

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

    @media (max-width: 695px) {
      margin-bottom: ${theme.spacings.big};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 ${theme.spacings.normal};
    gap: ${theme.spacings.small};

    @media (max-width: 695px) {
      align-items: center;
    }
  `}
`

export const Paragraph = styled.p`
  max-width: 35rem;
  @media (max-width: 695px) {
    text-align: center;
  }
`

export const Link = styled(NextLink)``

export const Button = styled(MUIButton)``

