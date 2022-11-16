import { faker } from '@faker-js/faker'
import { Container, Input, Label } from './styled'
import { TextFieldProps } from './TextFieldProps'

export const TextField = (props: TextFieldProps) => {
  const width = props.width || '100%'

  const inputId = 'input_' + faker.internet.password(10)

  return (
    <Container width={width}>
      <Input id={inputId} type="text" width={width} placeholder=" " />
      <Label htmlFor={inputId}>{props.label}</Label>
    </Container>
  )
}
