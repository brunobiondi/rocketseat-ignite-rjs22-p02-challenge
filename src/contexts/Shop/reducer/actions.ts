import { ActionTypes } from './ActionModel'
import { DeliveryModel, PaymentType } from '@/contexts/Shop/ShopModel'

export const cartAdd = (productKey: string, amount = 1) => ({
  type: ActionTypes.CART_ADD_ITEM,
  payload: { productKey, amount },
})

export const cartRemove = (productKey: string) => ({
  type: ActionTypes.CART_REMOVE_ITEM,
  payload: { productKey },
})

export const oneMore = (productKey: string) => ({
  type: ActionTypes.CART_PRODUCT_MORE,
  payload: { productKey },
})

export const oneLess = (productKey: string) => ({
  type: ActionTypes.CART_PRODUCT_LESS,
  payload: { productKey },
})

export const deliverySetFields = (fields: DeliveryModel) => ({
  type: ActionTypes.DELIVERY_SET_FIELDS,
  payload: { ...fields },
})

export const paymentSetMethod = (payment: PaymentType) => ({
  type: ActionTypes.PAYMENT_SET_METHOD,
  payload: payment,
})
