import { styled } from '@mui/material/styles'

export const Wrapper = styled('header')(
  ({ theme }) => `
  padding: ${theme.spacings.big} 0;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
`
)

export const Image = styled('img')`
  width: 15rem;
  height: 8rem;
  margin: 0 auto;

  cursor: pointer;
  filter: brightness(0.8);
`

export const Heading = styled('h2')(
  ({ theme }) => `
    text-align: center;

    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.hue};
    font-weight: ${theme.font.weight.bold};
    margin-top: ${theme.spacings.xsmall};
`
)

export const Phrase = styled('i')(
  ({ theme }) => `
    text-align: center;

    color: ${theme.colors.gray};
`
)
