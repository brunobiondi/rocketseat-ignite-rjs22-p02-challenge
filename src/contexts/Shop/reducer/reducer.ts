import produce from 'immer'
import { setLocalStorage as updateLocalStorage } from '../cartLocalStorage'
import { ShopModel } from '../ShopModel'
import { ActionModel, ActionTypes } from './ActionModel'

export const shopReducer = (state: ShopModel, action: ActionModel) => {
  const { type, payload } = action

  if (type === ActionTypes.CART_ADD_ITEM) {
    const { productKey, amount } = payload
    return produce(state, (draft) => {
      draft.products[productKey].amount = amount as number
      draft.cart[productKey] = draft.products[productKey]
      updateLocalStorage(draft)
    })
  }

  if (type === ActionTypes.CART_REMOVE_ITEM) {
    const { productKey } = payload
    return produce(state, (draft) => {
      draft.products[productKey].amount = 0
      delete draft.cart[productKey]
      updateLocalStorage(draft)
    })
  }

  if (type === ActionTypes.CART_PRODUCT_MORE) {
    const { productKey } = payload
    return produce(state, (draft) => {
      draft.products[productKey].amount++
      draft.cart[productKey] = draft.products[productKey]
      updateLocalStorage(draft)
    })
  }

  if (type === ActionTypes.CART_PRODUCT_LESS) {
    const { productKey } = payload
    return produce(state, (draft) => {
      draft.products[productKey].amount--

      draft.products[productKey].amount > 0
        ? (draft.cart[productKey] = draft.products[productKey])
        : delete draft.cart[productKey]

      updateLocalStorage(draft)
    })
  }

  if (type === ActionTypes.DELIVERY_SET_FIELDS) {
    return produce(state, (draft) => {
      draft.delivery = { ...payload }
    })
  }

  if (type === ActionTypes.PAYMENT_SET_METHOD) {
    return produce(state, (draft) => {
      draft.payment = payload
    })
  }

  return state
}
