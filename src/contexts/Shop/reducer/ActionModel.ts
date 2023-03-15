import { DeliveryModel, PaymentType } from '@/contexts/Shop/ShopModel'

enum CartActionEnum {
  CART_ADD_ITEM = 'CART_ADD_ITEM',
  CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
  CART_PRODUCT_MORE = 'CART_PRODUCT_MORE',
  CART_PRODUCT_LESS = 'CART_PRODUCT_LESS',
}

interface CartActionModel {
  type: CartActionEnum
  payload: {
    productKey: string
    amount?: number
  }
}

enum DeliveryActionEnum {
  DELIVERY_SET_FIELDS = 'DELIVERY_SET_FIELDS',
}

interface DeliveryActionModel {
  type: DeliveryActionEnum
  payload: DeliveryModel
}

enum PaymentActionEnum {
  PAYMENT_SET_METHOD = 'PAYMENT_SET_METHOD',
}

interface PaymentActionModel {
  type: PaymentActionEnum
  payload: PaymentType
}

export const ActionTypes = {
  ...CartActionEnum,
  ...DeliveryActionEnum,
  ...PaymentActionEnum,
}

export type ActionModel =
  | CartActionModel
  | DeliveryActionModel
  | PaymentActionModel
