import { BoxTitle } from '../BoxTitle'
import { Container, FlexColumn, FlexRow, Form, Input, LabelObs } from './styled'
import { ReactComponent as SvgCheckoutLocation } from '@/assets/checkout-location.svg'
import { ChangeEvent, useContext, useState } from 'react'
import { ShopContext } from '@/contexts/Shop/ShopContext'
import { api } from '@/services/api'

export const Delivery = () => {
  const { delivery } = useContext(ShopContext)

  const [postalCode, setPostalCode] = useState(`${delivery.postalCode}`)
  const [isLoading, setIsLoading] = useState(false)

  const getPostalCode = (value: string) => {
    api
      .get(value)
      .then(({ data }) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => setIsLoading(false))
  }

  const handlePostalCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = `${event.target.value}`.replace(/\D/g, '').substring(0, 8)
    setPostalCode(value)

    if (value.length === 8 && postalCode !== value) {
      setIsLoading(true)
      getPostalCode(value)
    }
  }

  return (
    <Container>
      <BoxTitle
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
        image={<SvgCheckoutLocation />}
      />
      <Form isLoading={isLoading}>
        <FlexRow>
          <FlexColumn flex={1}>
            <Input
              onChange={handlePostalCodeChange}
              value={postalCode}
              placeholder="CEP"
            />
          </FlexColumn>
          <FlexColumn flex={2}></FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <Input placeholder="Rua" defaultValue={delivery.street} />
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn flex={1}>
            <Input placeholder="Número" />
          </FlexColumn>
          <FlexColumn flex={2}>
            <LabelObs htmlFor="complement">Opcional</LabelObs>
            <Input
              defaultValue={delivery.apartment_unit}
              placeholder="Complemento"
              paddingRight="4.5rem"
            />
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn flex={1}>
            <Input defaultValue={delivery.neighborhood} placeholder="Bairro" />
          </FlexColumn>
          <FlexColumn flex={2}>
            <FlexColumn flex={4}>
              <Input defaultValue={delivery.city} placeholder="Cidade" />
            </FlexColumn>
            <FlexColumn flex={1}>
              <Input defaultValue={delivery.state} placeholder="UF" />
            </FlexColumn>
          </FlexColumn>
        </FlexRow>
      </Form>
    </Container>
  )
}
