export enum ActionTypes {
  CART_ADD = 'CART_ADD',
  CART_REMOVE = 'CART_REMOVE',
  ONE_MORE = 'ONE_MORE',
  ONE_LESS = 'ONE_LESS',
}

export interface ActionPayloads {
  productKey: string
  amount?: number
}

export interface ActionModel {
  type: ActionTypes
  payload: ActionPayloads
}
