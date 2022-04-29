import Avataaars from 'avataaars'
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

export const Avatar = styled(Avataaars)`
  width: 100%;
  height: 100%;
`
