import { styled } from '@mui/material/styles'
import Avataaars from 'avataaars'

import { AvatarProps } from 'types'

export const AvatarsWrapper = styled('div')<Pick<AvatarProps, 'eyecolor'>>(
  ({ eyecolor }) => `
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 1rem;

    & #Eye {
      fill: ${eyecolor};
    }
`
)

export const Avatar = styled(Avataaars)`
  width: 100%;
  height: 100%;
`
