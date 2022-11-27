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

export interface ShopModel {
  cart: ProductsModel
  products: ProductsModel
}

export interface ShopContextModel {
  cart: ProductsModel
  products: ProductsModel

  cartAdd: (productKey: string, amount: number) => void
  cartRemove: (productKey: string) => void
  oneMore: (productKey: string) => void
  oneLess: (productKey: string) => void
}
