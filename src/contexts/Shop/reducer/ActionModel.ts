export enum ActionTypes {
  CART_ADD_ITEM = 'CART_ADD_ITEM',
  CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
  CART_PRODUCT_MORE = 'CART_PRODUCT_MORE',
  CART_PRODUCT_LESS = 'CART_PRODUCT_LESS',
}

export interface ActionPayloads {
  productKey: string
  amount?: number
}

export interface ActionModel {
  type: ActionTypes
  payload: ActionPayloads
}
