import { ActionTypes } from './ActionModel'

export const cartAdd = (productKey: string, amount = 1) => ({
  type: ActionTypes.CART_ADD,
  payload: { productKey, amount },
})

export const cartRemove = (productKey: string) => ({
  type: ActionTypes.CART_ADD,
  payload: { productKey },
})

export const oneMore = (productKey: string) => ({
  type: ActionTypes.ONE_MORE,
  payload: { productKey },
})

export const oneLess = (productKey: string) => ({
  type: ActionTypes.ONE_LESS,
  payload: { productKey },
})
