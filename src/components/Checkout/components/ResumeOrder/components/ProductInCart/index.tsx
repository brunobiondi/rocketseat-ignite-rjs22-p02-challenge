import { ProductModel } from '@/contexts/Shop/ShopModel'
import { ProductAmount } from '../ProductAmount'
import { Container, Divider, Product, Title, TotalPrice } from './styled'

interface ProductInCartProps {
  product: ProductModel
}

export const ProductInCart = ({ product }: ProductInCartProps) => {
  const { name, price, amount, image } = product

  const total = price * amount

  const priceBrl = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    currency: 'BRL',
    style: 'currency',
  }).format(total)

  return (
    <>
      <Container>
        <img
          src={image}
          alt="Coffee"
          style={{ width: '4rem', height: '4rem' }}
        />
        <Product>
          <Title>{name}</Title>
          <ProductAmount product={product} />
        </Product>
        <TotalPrice>{priceBrl}</TotalPrice>
      </Container>
      <Divider />
    </>
  )
}
