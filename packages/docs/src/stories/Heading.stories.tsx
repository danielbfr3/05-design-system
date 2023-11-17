import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@spiegelsoft/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Example title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 title',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão, o componente Heading renderiza um elemento `<h2>`. Você pode alterar isso usando a prop `as`.',
      },
    },
  },
}
