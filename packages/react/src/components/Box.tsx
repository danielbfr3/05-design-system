import { ComponentProps } from '@stitches/react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
})

Box.displayName = 'Box'

export type BoxProps = ComponentProps<typeof Box>
