import { ComponentProps } from '@stitches/react'
import { Input, Prefix, TextInputContainer } from './styles'
import { forwardRef, ElementRef } from 'react'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  disabled?: boolean
  placeholder?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(({
  prefix,
  disabled = false,
  ...props
}: TextInputProps, ref) => {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}

      <Input ref={ref} disabled={disabled} {...props} />
    </TextInputContainer>
  )
})