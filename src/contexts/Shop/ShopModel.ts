export interface ProductModel {
  id: number
  _productKey: string
  name: string
  description: string
  image: string
  price: number
  amount: number
  tags: string[]
}

export interface ProductsModel {
  [productKey: string]: ProductModel
}

export interface DeliveryModel {
  cep: string
  state: string
  city: string
  neighborhood: string
  street: string
  number: string
  apartment_unit: string
}

export type PaymentType = 'credit' | 'debit' | 'money'

export interface ShopModel {
  cart: ProductsModel
  products: ProductsModel
  delivery: DeliveryModel
  payment: PaymentType
}

export interface ShopContextModel extends ShopModel {
  cartAdd: (productKey: string, amount: number) => void
  cartRemove: (productKey: string) => void
  oneMore: (productKey: string) => void
  oneLess: (productKey: string) => void
}
