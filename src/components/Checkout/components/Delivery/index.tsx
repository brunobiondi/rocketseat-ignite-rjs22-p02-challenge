import { BoxTitle } from '../BoxTitle';
import {
  Container,
  FlexColumn,
  FlexRow,
  Form,
  Input,
  LabelObs,
} from './styled';

import { ReactComponent as SvgCheckoutLocation } from '@/assets/checkout-location.svg';

export const Delivery = () => {
  return (
    <Container>
      <BoxTitle
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
        image={<SvgCheckoutLocation />}
      />
      <Form>
        <FlexRow>
          <FlexColumn flex={1}>
            <Input placeholder="CEP" />
          </FlexColumn>
          <FlexColumn flex={2}></FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <Input placeholder="Rua" />
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn flex={1}>
            <Input placeholder="Número" />
          </FlexColumn>
          <FlexColumn flex={2}>
            <LabelObs htmlFor="complement">Opcional</LabelObs>
            <Input placeholder="Complemento" paddingRight="4.5rem" />
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn flex={1}>
            <Input placeholder="Bairro" />
          </FlexColumn>
          <FlexColumn flex={2}>
            <FlexColumn flex={4}>
              <Input placeholder="Cidade" />
            </FlexColumn>
            <FlexColumn flex={1}>
              <Input placeholder="UF" />
            </FlexColumn>
          </FlexColumn>
        </FlexRow>
      </Form>
    </Container>
  );
};
