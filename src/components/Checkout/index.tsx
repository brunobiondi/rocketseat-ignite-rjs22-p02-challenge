import { Delivery } from './components/Delivery';
import { Payment } from './components/Payment';
import { ResumeOrder } from './components/ResumeOrder';
import { ColumnResumeOrder, ColumnUserInfo, Container, Title } from './styled';

export const Checkout = () => {
  return (
    <Container>
      <ColumnUserInfo>
        <Title>Complete seu pedido</Title>
        <Delivery />
        <Payment />
      </ColumnUserInfo>
      <ColumnResumeOrder>
        <Title>Cafés selecionados</Title>
        <ResumeOrder />
      </ColumnResumeOrder>
    </Container>
  );
};
