import { ProductModel } from '@/contexts/Products/ProductsModel'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  ADD_AMOUNT = 'ADD_AMOUNT',
  REMOVE_AMOUNT = 'REMOVE_AMOUNT',
}

export const addProduct = (product: ProductModel, amount: number) => ({
  type: ActionTypes.ADD_PRODUCT,
  payload: { product, amount },
})

export const removeProduct = (product: ProductModel) => ({
  type: ActionTypes.REMOVE_PRODUCT,
  payload: { product },
})

export const addAmount = (product: ProductModel) => ({
  type: ActionTypes.ADD_AMOUNT,
  payload: { product },
})

export const removeAmount = (product: ProductModel) => ({
  type: ActionTypes.REMOVE_AMOUNT,
  payload: { product },
})
