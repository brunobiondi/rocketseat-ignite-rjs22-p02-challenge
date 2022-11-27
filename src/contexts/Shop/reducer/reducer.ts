import produce from 'immer'
import { ShopModel } from '../ShopModel'
import { ActionModel, ActionTypes } from './ActionModel'

export const shopReducer = (state: ShopModel, action: ActionModel) => {
  const {
    type,
    payload: { productKey, amount = 0 },
  } = action

  switch (type) {
    case ActionTypes.CART_ADD:
      return produce(state, (draft) => {
        draft.products[productKey].amount = amount as number
        draft.cart[productKey] = draft.products[productKey]
      })

    case ActionTypes.CART_REMOVE:
      return produce(state, (draft) => {
        draft.products[productKey].amount = 0
        delete draft.cart[productKey]
      })

    case ActionTypes.ONE_MORE:
      return produce(state, (draft) => {
        draft.products[productKey].amount++
        draft.cart[productKey] = draft.products[productKey]
      })

    case ActionTypes.ONE_LESS:
      return produce(state, (draft) => {
        console.log('ActionTypes.ONE_LESS')
        draft.products[productKey].amount--
        draft.cart[productKey] = draft.products[productKey]

        if (draft.products[productKey].amount === 0) {
          delete draft.cart[productKey]
        }
      })

    default:
      return state
  }
}
