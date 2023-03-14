import { ShopContext } from '@/contexts/Shop/ShopContext';
import { useContext } from 'react';
import { Container, ResumeItem, ResumeTotal } from './styled';

export const ResumePayment = () => {
  const { cart } = useContext(ShopContext);
  const productsInCart = Object.values(cart);

  const numberFormat = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    currency: 'BRL',
    style: 'currency',
  });

  const totalItems = productsInCart.reduce((acc, product) => {
    return acc + product.price * product.amount;
  }, 0);
  const totalItemsBrl = numberFormat.format(totalItems);

  const delivery = 3.5;
  const deliveryBrl = numberFormat.format(delivery);

  const total = totalItems + delivery;
  const totalBrl = numberFormat.format(total);

  return (
    <Container>
      <ResumeItem>
        <span>Total de itens</span>
        <span>{totalItemsBrl}</span>
      </ResumeItem>
      <ResumeItem>
        <span>Entrega</span>
        <span>{deliveryBrl}</span>
      </ResumeItem>
      <ResumeTotal>
        <span>Total</span>
        <span>{totalBrl}</span>
      </ResumeTotal>
    </Container>
  );
};
