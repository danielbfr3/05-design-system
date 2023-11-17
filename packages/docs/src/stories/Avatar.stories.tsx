import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@spiegelsoft/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {
    src: 'https://github.com/danielbfr3.png',
  },
}

export const NoImage: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Você pode usar a prop `delayMs` para controlar o tempo de transição entre o fallback e a imagem.',
      },
    },
  },
}
