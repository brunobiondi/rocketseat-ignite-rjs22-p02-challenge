import { ReactComponent as Logo } from '@/assets/logo.svg'
import { Cart } from './components/Cart'
import { City } from './components/City'
import { Container, ContainerOptions } from './styled'

export const Header = () => {
  return (
    <Container>
      <Logo />
      <ContainerOptions>
        <City />
        <Cart />
      </ContainerOptions>
    </Container>
  )
}
