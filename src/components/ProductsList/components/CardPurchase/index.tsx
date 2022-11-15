import { CartContext } from '@/contexts/Cart/CartContext'
import { ProductModel } from '@/contexts/Products/ProductsModel'
import { MouseEvent, useContext, useState } from 'react'
import { AddCart, Amount, Container, Price } from './styled'

import svgCartWhite from '@/assets/cart-white.svg'
import svgMinus from '@/assets/minus.svg'
import svgMore from '@/assets/more.svg'
import svgRemove from '@/assets/remove.svg'

export const CardPurchase = ({ product }: { product: ProductModel }) => {
  const {
    cartState,
    contextAddProduct,
    contextRemoveProduct,
    contextAddAmount,
    contextRemoveAmount,
  } = useContext(CartContext)

  const [amount, setAmount] = useState(1)

  const isInCart = !!cartState.products.find((item) => item.id === product.id)

  const handleAdd = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setAmount(amount + 1)
    isInCart && contextAddAmount(product)
  }

  const handleRemove = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (amount === 1) {
      contextRemoveProduct(product)
      return
    }

    setAmount(amount - 1)
    isInCart && contextRemoveAmount(product)
  }

  const handleToggleToCart = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (isInCart) {
      contextRemoveProduct(product)
      setAmount(1)
      return
    }
    contextAddProduct(product, amount)
  }

  return (
    <Container>
      <Price>
        <span>R$</span> 9,90
      </Price>

      <Amount isInCart={isInCart}>
        <a href="#" onClick={handleRemove}>
          <img src={svgMinus} alt="" />
        </a>
        <span>{amount}</span>
        <a href="#" onClick={handleAdd}>
          <img src={svgMore} alt="" />
        </a>
      </Amount>

      <AddCart href="#" onClick={handleToggleToCart} isInCart={isInCart}>
        {isInCart ? (
          <img src={svgRemove} alt="" />
        ) : (
          <img src={svgCartWhite} alt="" />
        )}
      </AddCart>
    </Container>
  )
}
