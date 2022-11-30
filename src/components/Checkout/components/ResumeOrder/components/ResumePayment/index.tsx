import { Container, ResumeItem, ResumeTotal } from './styled'

export const ResumePayment = () => {
  return (
    <Container>
      <ResumeItem>
        <span>Total de itens</span>
        <span>R$ 29,70</span>
      </ResumeItem>
      <ResumeItem>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </ResumeItem>
      <ResumeTotal>
        <span>Total</span>
        <span>R$ 33,20</span>
      </ResumeTotal>
    </Container>
  )
}
