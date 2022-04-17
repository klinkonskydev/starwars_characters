import { Button as MaterialButton } from '@mui/material'
import {darken, rgba} from 'polished'

import styled, {css} from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacings.normal};
`}
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 745px) {
    justify-content: space-around;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 745px) {
    display: none;
  }
`

export const Button = styled(MaterialButton)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
      border-color: ${darken(0.1, theme.colors.primary)};
      background-color: ${rgba(theme.colors.primary, 0.1)}
    }

    &:disabled {
        color: ${darken(0.3, theme.colors.primary)};
    }
  `}
`

export const Page = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    border-bottom: 1px solid ${theme.colors.primary};
  `}
`
