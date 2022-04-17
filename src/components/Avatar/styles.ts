import styled, { css } from 'styled-components'
import { AvatarProps } from 'types'

export const AvatarsWrapper = styled.div<Pick<AvatarProps, 'eyeColor'>>`
  ${({ eyeColor }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 6rem;
    margin-right: 1rem;

    & #Eye {
      fill: ${eyeColor};
    }
  `}
`
