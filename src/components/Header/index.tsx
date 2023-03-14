import { ReactComponent as Logo } from '@/assets/logo.svg';
import { Link } from 'react-router-dom';
import { Cart } from './components/Cart';
import { City } from './components/City';
import { Container, ContainerOptions } from './styled';

export const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <ContainerOptions>
        <City />
        <Cart />
      </ContainerOptions>
    </Container>
  );
};
