import { BoxTitle } from '../BoxTitle'
import { Container } from './styled'

import { ReactComponent as SvgCheckoutLocation } from '@/assets/checkout-location.svg'

export const Delivery = () => {
  return (
    <Container>
      <BoxTitle
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
        image={<SvgCheckoutLocation />}
      />
    </Container>
  )
}
