import { Story, Meta } from '@storybook/react/types-6-0'
import { AvatarProps } from 'types'
import Avatar from '.'

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    mouth: 'Eating',
    hairColor: 'Red',
    skinColor: 'Light',
    gender: 'female',
    eyeColor: 'Blue'
  }
} as Meta

export const Default: Story = (args: AvatarProps) => <Avatar {...args} />
