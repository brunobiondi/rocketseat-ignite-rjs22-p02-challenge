import { BoxTitle } from '../BoxTitle'
import { Container, FlexColumn, FlexRow, Form, Input, LabelObs } from './styled'
import { ReactComponent as SvgCheckoutLocation } from '@/assets/checkout-location.svg'
import { ChangeEvent, useContext, useState } from 'react'
import { ShopContext } from '@/contexts/Shop/ShopContext'
import { api } from '@/services/api'
import { DeliveryModel } from '@/contexts/Shop/ShopModel'
import { Loading } from '@/components/Loading'

export const Delivery = () => {
  const { delivery, setDelivery } = useContext(ShopContext)

  const [postalCode, setPostalCode] = useState(`${delivery.postalCode}`)
  const [lastPostalCode, setLastPostalCode] = useState(`${delivery.postalCode}`)
  const [isLoading, setIsLoading] = useState(false)

  const getPostalCode = (value: string) => {
    api
      .get(value)
      .then(({ data }) => {
        setDelivery({
          postalCode: data.cep,
          city: data.city,
          state: data.state,
          neighborhood: data?.neighborhood ?? '',
          street: data?.street ?? '',
        } as DeliveryModel)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => setIsLoading(false))
  }

  const handlePostalCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = `${event.target.value}`.replace(/\D/g, '').substring(0, 8)
    setPostalCode(value)

    if (lastPostalCode !== value && value.length === 8) {
      setLastPostalCode(value)
      setIsLoading(true)
      getPostalCode(value)
    }
  }

  const saveDeliveryOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setDelivery({ ...delivery, [target.name]: target.value })
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
          <FlexColumn flex={2}>
            {isLoading && <Loading>Buscando CEP</Loading>}
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <Input
              name="street"
              placeholder="Rua"
              key={delivery.street}
              defaultValue={delivery.street}
              onChange={saveDeliveryOnChange}
            />
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn flex={1}>
            <Input
              name="number"
              placeholder="Número"
              key={delivery.number}
              defaultValue={delivery.number}
              onChange={saveDeliveryOnChange}
            />
          </FlexColumn>
          <FlexColumn flex={2}>
            <LabelObs htmlFor="complement">Opcional</LabelObs>
            <Input
              name="apartment_unit"
              key={delivery.apartment_unit}
              defaultValue={delivery.apartment_unit}
              placeholder="Complemento"
              paddingRight="4.5rem"
              onChange={saveDeliveryOnChange}
            />
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn flex={1}>
            <Input
              name="neighborhood"
              key={delivery.neighborhood}
              defaultValue={delivery.neighborhood}
              placeholder="Bairro"
              onChange={saveDeliveryOnChange}
            />
          </FlexColumn>
          <FlexColumn flex={2}>
            <FlexColumn flex={4}>
              <Input
                name="city"
                key={delivery.city}
                defaultValue={delivery.city}
                placeholder="Cidade"
                onChange={saveDeliveryOnChange}
              />
            </FlexColumn>
            <FlexColumn flex={1}>
              <Input
                name="state"
                key={delivery.state}
                defaultValue={delivery.state}
                placeholder="UF"
                onChange={saveDeliveryOnChange}
              />
            </FlexColumn>
          </FlexColumn>
        </FlexRow>
      </Form>
    </Container>
  )
}
