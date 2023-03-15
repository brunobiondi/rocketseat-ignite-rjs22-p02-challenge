import { BoxTitle } from '../BoxTitle'
import { Container, PaymentMethod, PaymentMethods } from './styled'

import { ReactComponent as SvgCheckoutPayment } from '@/assets/checkout-payment.svg'
import { ReactComponent as SvgPayCredit } from '@/assets/pay-credit.svg'
import { ReactComponent as SvgPayDebit } from '@/assets/pay-debit.svg'
import { ReactComponent as SvgPayMoney } from '@/assets/pay-money.svg'
import { useContext } from 'react'
import { ShopContext } from '@/contexts/Shop/ShopContext'

export const Payment = () => {
  const { payment } = useContext(ShopContext)

  return (
    <Container>
      <BoxTitle
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        image={<SvgCheckoutPayment />}
      />

      <PaymentMethods>
        <PaymentMethod selectPaymentMethod={payment === 'credit'}>
          <SvgPayCredit />
          Cartão de Crédito
        </PaymentMethod>
        <PaymentMethod selectPaymentMethod={payment === 'debit'}>
          <SvgPayDebit />
          Cartão de Débito
        </PaymentMethod>
        <PaymentMethod selectPaymentMethod={payment === 'money'}>
          <SvgPayMoney />
          Dinheiro
        </PaymentMethod>
      </PaymentMethods>
    </Container>
  )
}
