import { ShopContext } from '@/contexts/Shop/ShopContext'
import { useContext } from 'react'
import { ProductCard } from './components/ProductCard'
import { Container, List, Title } from './styled'

export const ListProducts = () => {
  const { products } = useContext(ShopContext)
  const listProducts = Object.values(products)

  return (
    <Container>
      <Title>Nossos cafés</Title>
      <List>
        {listProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </List>
    </Container>
  )
}
