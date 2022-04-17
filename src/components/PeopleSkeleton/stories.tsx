import { Story, Meta } from '@storybook/react/types-6-0'
import PeopleSkeleton from '.'

export default {
  title: 'PeopleSkeleton',
  component: PeopleSkeleton
} as Meta

export const Default: Story = () => <PeopleSkeleton />
