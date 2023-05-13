import type { ChangeEventHandler } from 'react'

import { Container, TextfieldInput, TextareaInput, LabelText } from './styles'

interface IInputProps {
  label: string
  value: string
}

interface ITextfieldProps extends IInputProps {
  onChange: ChangeEventHandler<HTMLInputElement>
  type?: 'text' | 'number'
}

interface ITextareaProps extends IInputProps {
  onChange: ChangeEventHandler<HTMLTextAreaElement>
  rows?: number
}

export function Textfield({
  label,
  value,
  onChange,
  type = 'text',
}: ITextfieldProps) {
  return (
    <Container>
      <TextfieldInput
        id={label}
        type={type}
        placeholder=" "
        value={value}
        onChange={onChange}
      />
      <LabelText htmlFor={label}>{label}</LabelText>
    </Container>
  )
}

export function Textarea({ label, value, onChange, rows = 3 }: ITextareaProps) {
  return (
    <Container>
      <TextareaInput
        id={label}
        placeholder=" "
        value={value}
        onChange={onChange}
        rows={rows}
      />
      <LabelText htmlFor={label}>{label}</LabelText>
    </Container>
  )
}
