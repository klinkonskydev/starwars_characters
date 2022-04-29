import { styled } from '@mui/material/styles'

import NextLink from 'next/link'
import { Button as MUIButton, Typography } from '@mui/material'

import Container from 'components/Container'

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const AvatarWrapper = styled('div')(({ theme }) =>`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: ${theme.spacings.normal};

    @media (max-width:  705px) {
      margin-bottom: ${theme.spacings.big};
    }
`)

export const Heading = styled("h2")(({ theme }) => `
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.normal};
`)

export const Paragraph = styled(Typography)`
  font-size: 1.6rem;
  max-width: 35rem;
  text-align: center;
`

export const Content = styled('div')(({ theme }) => `
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

      & p:first-of-type {
        color: ${theme.colors.gray};
      }

      & p:last-of-type {
        margin-left: auto;
      }
    }

    & section {
      margin-bottom: ${theme.spacings.normal};

      & p:first-of-type {
        color: ${theme.colors.gray};
      }
    }

    @media (max-width: 705px) {
      min-width: 100%;
      align-items: center;
      border: 0;
      box-shadow: none;
    }
`)

export const Link = styled(NextLink)``

export const Button = styled(MUIButton)``
