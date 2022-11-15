import { ProductModel } from '../Products/ProductsModel'

export interface ProductAmountModel extends ProductModel {
  amount: number
}

export interface CartModel {
  products: ProductAmountModel[]
}
