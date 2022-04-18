import { Card, CardContent } from '@mui/material'
import styled, { css } from 'styled-components'

export const Wrapper = styled(Card)``

export const Content = styled(CardContent)`
  display: flex;
  align-items: center;
`

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.big};
    font-weight: ${theme.font.weight.semiBold};
    font-family: ${theme.font.family};

    max-width: 19.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.normal};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family};

    max-width: 19.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`
