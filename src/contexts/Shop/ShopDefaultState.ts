import products from './products.json'
import {
  DeliveryModel,
  PaymentType,
  ProductsModel,
} from '@/contexts/Shop/ShopModel'

export { products }

export const cart: ProductsModel = {}

export const delivery: DeliveryModel = {
  postalCode: '90010020',
  state: 'RS',
  city: 'Porto Alegre',
  neighborhood: 'Centro Histórico',
  street: 'Travessa Rua dos Cataventos',
  number: '',
  apartment_unit: '',
}

export const payment: PaymentType = 'credit'
