import { ReactNode } from 'react'
import { Container, Content, Subtitle, Title } from './styled'

interface DeliveryInfoTitleProps {
  title: string
  subtitle: string
  image: ReactNode
}

export const DeliveryInfoTitle = (props: DeliveryInfoTitleProps) => {
  const { title, subtitle, image } = props

  return (
    <Container>
      {image}
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Content>
    </Container>
  )
}
