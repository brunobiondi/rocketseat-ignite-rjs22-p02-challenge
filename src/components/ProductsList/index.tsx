import { ProductsContext } from '@/contexts/Products/ProductsContext'
import { useContext } from 'react'
import { ProductCard } from './components/ProductCard'
import { Container, List, Title } from './styled'

export const ProductsList = () => {
  const products = useContext(ProductsContext)

  return (
    <Container>
      <Title>Nossos cafés</Title>
      <List>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </List>
    </Container>
  )
}
