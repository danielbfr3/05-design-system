import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Multistep, MultistepProps } from '@ignite-ui/react'

export default {
  title: 'Form/Multistep',
  component: Multistep,
  args: {
    size: 3,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
          }}
        >
          <Text size="sm">Steps</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultistepProps>

export const Primary: StoryObj<MultistepProps> = {
  args: {},
}

export const Full: StoryObj<MultistepProps> = {
  args: {
    size: 4,
    currentStep: 5,
  },
}
