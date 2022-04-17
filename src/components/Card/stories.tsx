import { Story, Meta } from '@storybook/react/types-6-0'
import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    name: 'Igor',
    homeworld: 'Terra',
    skinColor: 'Light',
    hairColor: 'Black',
    eyeColor: 'Red',
    gender: null
  }
} as Meta

export const Default: Story = (args: CardProps ) => <Card {...args} />
