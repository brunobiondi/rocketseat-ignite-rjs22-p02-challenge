import { ProductAmount } from '../ProductAmount'
import { Container, Divider, Product, Title, TotalPrice } from './styled'

import products from '@/contexts/Shop/products.json'

export const ProductInCart = () => {
  const product = Object.values(products)[0]

  const price = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    currency: 'BRL',
    style: 'currency',
  }).format(product.price)

  return (
    <>
      <Container>
        <img
          src="/products/coffee-1.png"
          alt="Coffee"
          style={{ width: '4rem', height: '4rem' }}
        />
        <Product>
          <Title>Expresso Tradicional</Title>
          <ProductAmount product={product} />
        </Product>
        <TotalPrice>{price}</TotalPrice>
      </Container>
      <Divider />
    </>
  )
}
