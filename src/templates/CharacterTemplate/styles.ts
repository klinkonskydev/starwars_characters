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

    @media (max-width:  705px) {
      margin-bottom: ${theme.spacings.big};
    }
  `}
`

export const Heading = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.normal};
  `}
`

export const Paragraph = styled.p`
  max-width: 35rem;
  text-align: center;
`

export const Content = styled.div`
  ${({ theme }) => css`
    min-width: 39.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: ${theme.spacings.small};

    padding: ${theme.spacings.big};
    margin-top: ${theme.spacings.big};

    border: 1px solid ${theme.colors.gray};
    box-shadow: 0 0 4px 0 ${theme.colors.gray} inset;
    border-radius: 4px;

    & div {
      width: 100%;
      display: flex;
      align-items: center;

      & ${Paragraph}:first-child {
        color: ${theme.colors.gray};
      }

      & ${Paragraph}:last-child {
        margin-left: auto;
      }
    }

    & section {
      margin-bottom: ${theme.spacings.normal};

      & ${Paragraph}:first-child {
        color: ${theme.colors.gray};
      }
    }

    @media (max-width: 705px) {
      margin-top: 0;
      align-items: center;
      border: 0;
      box-shadow: none;
    }
  `}
`
export const Link = styled(NextLink)``

export const Button = styled(MUIButton)``
