import { ProductsList } from './components/ProductsList'
import { Container, Title } from './styled'

export const Products = () => {
  return (
    <Container>
      <Title>Nossos cafés</Title>
      <ProductsList />
    </Container>
  )
}
