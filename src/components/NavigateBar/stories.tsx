import { Story, Meta } from '@storybook/react/types-6-0'
import NavigateBar, { NavigateBarProps } from '.'

export default {
  title: 'NavigateBar',
  component: NavigateBar,
  args: {
    initialValue: 0,
    array: [1, 2, 3],
    loading: false
  }
} as Meta

export const Default: Story = (args: NavigateBarProps) => (
  <NavigateBar {...args} />
)
