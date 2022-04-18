import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacings.normal};

    & ul li:first-of-type button {
      color: ${theme.colors.white};
    }

    & ul li:last-of-type button {
      color: ${theme.colors.white};
    }

    & ul li button {
      color: ${theme.colors.primary};
    }

    & ul li div {
      color: ${theme.colors.white};
    }
`}
`
