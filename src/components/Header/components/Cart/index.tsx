import { ReactComponent as IconCart } from '@/assets/cart.svg'
import { BadgeTotalProductsCart } from './BadgeTotalProductsCart'
import { LinkCart } from './styled'

export const Cart = () => {
  return (
    <LinkCart to="/checkout">
      <BadgeTotalProductsCart />
      <IconCart />
    </LinkCart>
  )
}
