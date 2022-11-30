import { Delivery } from './components/Delivery'
import { Payment } from './components/Payment'
import { ResumeOrder } from './components/ResumeOrder'
import { ColumnResumeOrder, ColumnUserInfo, Container } from './styled'

export const Checkout = () => {
  return (
    <Container>
      <ColumnUserInfo>
        <Delivery />
        <Payment />
      </ColumnUserInfo>
      <ColumnResumeOrder>
        <ResumeOrder />
      </ColumnResumeOrder>
    </Container>
  )
}
