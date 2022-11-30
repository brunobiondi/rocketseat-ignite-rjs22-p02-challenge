import { ProductInCart } from './components/ProductInCart'
import { ResumePayment } from './components/ResumePayment'
import { ButtonConfirmOrder, Container } from './styled'

export const ResumeOrder = () => {
  return (
    <Container>
      <ProductInCart />
      <ProductInCart />
      <ProductInCart />
      <ProductInCart />
      <ResumePayment />
      <ButtonConfirmOrder>Confirmar Pedido</ButtonConfirmOrder>
    </Container>
  )
}
