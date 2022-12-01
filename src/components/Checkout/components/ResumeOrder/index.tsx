import { ShopContext } from '@/contexts/Shop/ShopContext'
import { useContext } from 'react'
import { ProductInCart } from './components/ProductInCart'
import { ResumePayment } from './components/ResumePayment'
import { ButtonConfirmOrder, Container } from './styled'

export const ResumeOrder = () => {
  const { cart } = useContext(ShopContext)
  const productsInCart = Object.values(cart)

  return (
    <Container>
      {productsInCart.map((product) => (
        <ProductInCart key={product._productKey} product={product} />
      ))}

      <ResumePayment />

      <ButtonConfirmOrder>Confirmar Pedido</ButtonConfirmOrder>
    </Container>
  )
}
