import { BoxTitle } from '../BoxTitle'
import { Container, PaymentMethod, PaymentMethods } from './styled'
import { ReactComponent as SvgCheckoutPayment } from '@/assets/checkout-payment.svg'
import { ReactComponent as SvgPayCredit } from '@/assets/pay-credit.svg'
import { ReactComponent as SvgPayDebit } from '@/assets/pay-debit.svg'
import { ReactComponent as SvgPayMoney } from '@/assets/pay-money.svg'
import { PaymentType } from '@/contexts/Shop/ShopModel'
import { useContext } from 'react'
import { ShopContext } from '@/contexts/Shop/ShopContext'

export const Payment = () => {
  const { payment, setPayment } = useContext(ShopContext)

  const handleSetPayment = (paymentMethod: PaymentType) => () => {
    setPayment(paymentMethod)
  }

  return (
    <Container>
      <BoxTitle
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        image={<SvgCheckoutPayment />}
      />

      <PaymentMethods>
        <PaymentMethod
          selectPaymentMethod={payment === 'credit'}
          onClick={handleSetPayment('credit')}
        >
          <SvgPayCredit />
          Cartão de Crédito
        </PaymentMethod>

        <PaymentMethod
          selectPaymentMethod={payment === 'debit'}
          onClick={handleSetPayment('debit')}
        >
          <SvgPayDebit />
          Cartão de Débito
        </PaymentMethod>

        <PaymentMethod
          selectPaymentMethod={payment === 'money'}
          onClick={handleSetPayment('money')}
        >
          <SvgPayMoney />
          Dinheiro
        </PaymentMethod>
      </PaymentMethods>
    </Container>
  )
}
