import styled, { css } from 'styled-components'

import NextImage from 'next/image'

export const Wrapper = styled.header`
  ${({ theme }) => css`
  padding: ${theme.spacings.big} 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`}
`

export const Image = styled(NextImage)`
  filter: brightness(0.8);
`

export const Heading = styled.h2`
  ${({ theme }) => css`
    text-align: center;

    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.hue};
    font-weight: ${theme.font.weight.bold};
    margin-top: ${theme.spacings.xsmall};
  `}
`

export const Phrase = styled.i`
  ${({ theme }) => css`
    text-align: center;

    color: ${theme.colors.gray};
  `}
`
