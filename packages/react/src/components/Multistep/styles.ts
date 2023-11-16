import { styled } from '../../styles'
import { Text } from '../Text'

export const MultistepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$gray200',

  variants: {
    size: {
      sm: {
        fontSize: '$xs',
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})

export const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--step-size), 1fr)',
  gap: '$2',
  marginTop: '$1',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
      false: {
        backgroundColor: '$gray600',
      },
    },
  },

  defaultVariants: {
    active: false,
  },
})

MultistepContainer.displayName = 'Multistep'
