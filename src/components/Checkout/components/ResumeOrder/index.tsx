import { ShopContext } from '@/contexts/Shop/ShopContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductInCart } from './components/ProductInCart';
import { ResumePayment } from './components/ResumePayment';
import { ButtonConfirmOrder, Container } from './styled';

export const ResumeOrder = () => {
  const { cart } = useContext(ShopContext);

  const navigate = useNavigate();

  const productsInCart = Object.values(cart);
  const isEmptyCart = productsInCart.length === 0;

  const handleCheckout = () => {
    navigate('/success');
  };

  return (
    <Container>
      {productsInCart.map((product) => (
        <ProductInCart key={product._productKey} product={product} />
      ))}

      <ResumePayment />

      <ButtonConfirmOrder disabled={isEmptyCart} onClick={handleCheckout}>
        Confirmar Pedido
      </ButtonConfirmOrder>
    </Container>
  );
};
