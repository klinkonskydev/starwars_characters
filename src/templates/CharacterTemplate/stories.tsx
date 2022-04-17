import { Story, Meta } from '@storybook/react/types-6-0'
import CharacterTemplate from '.'

export default {
  title: 'CharacterTemplate',
  component: CharacterTemplate
} as Meta

export const Default: Story = () => <CharacterTemplate />
