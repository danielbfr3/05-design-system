import { ComponentProps } from '@stitches/react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  disabled?: boolean
  placeholder?: string
}

export function TextInput({
  prefix,
  disabled = false,
  ...props
}: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}

      <Input disabled={disabled} {...props} />
    </TextInputContainer>
  )
}
