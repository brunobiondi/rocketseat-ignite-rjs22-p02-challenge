import produce from 'immer'
import { CartModel } from '../CartModel'
import { ActionTypes } from './actions'

export const cartReducer = (state: CartModel, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      return produce(state, (draft) => {
        const { product, amount } = action.payload
        draft.products.push({ ...product, amount })
      })

    case ActionTypes.REMOVE_PRODUCT:
      return produce(state, (draft) => {
        const { product } = action.payload
        draft.products = draft.products.filter((p) => p.id !== product.id)
      })

    case ActionTypes.ADD_AMOUNT:
      return produce(state, (draft) => {
        const { product } = action.payload
        draft.products = draft.products.map((p) => {
          if (p.id === product.id) p.amount++
          return p
        })
      })

    case ActionTypes.REMOVE_AMOUNT:
      return produce(state, (draft) => {
        const { product } = action.payload

        let isRemoveProduct = false

        const draftProducts = draft.products.map((p) => {
          if (p.id === product.id) {
            p.amount--
            isRemoveProduct = p.amount === 0
          }
          return p
        })

        draft.products = isRemoveProduct
          ? draftProducts.filter((p) => p.id !== product.id)
          : draftProducts
      })
    default:
      return state
  }
}
