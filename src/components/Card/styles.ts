import { Card } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Wrapper = styled(Card)(({ theme }) =>`
    display: flex;
    align-items: center;

    padding: ${theme.spacings.normal};
`)

export const AvatarWrapper = styled("div")`
  width: 6rem; height: 6rem;
`

export const Heading = styled('h2')(({ theme }) =>`
    font-size: ${theme.font.sizes.big};
    font-weight: ${theme.font.weight.semiBold};
    font-family: ${theme.font.family};

    max-width: 19.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
`)

export const Character = styled("div")`
  flex: 1;
  margin-left: 1em;
`

export const Paragraph = styled('p')(({ theme }) =>`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.normal};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family};

    max-width: 19.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`)
