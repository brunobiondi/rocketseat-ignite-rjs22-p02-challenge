import {
  DeliveryModel,
  PaymentType,
  ProductsModel,
  ShopModel,
} from './ShopModel'
import * as defaultState from './ShopDefaultState'

const {
  VITE_LOCALSTORAGE_CART_VERSION,
  VITE_LOCALSTORAGE_CART_KEY_DATA,
  VITE_LOCALSTORAGE_CART_KEY_VERSION,
} = import.meta.env

export const getLocalStorage = (): ShopModel => {
  const version = localStorage.getItem(VITE_LOCALSTORAGE_CART_KEY_VERSION)
  const isNull = version === null
  const isDiff = version !== VITE_LOCALSTORAGE_CART_VERSION

  if (isNull || isDiff) {
    localStorage.setItem(
      VITE_LOCALSTORAGE_CART_KEY_VERSION,
      VITE_LOCALSTORAGE_CART_VERSION
    )
    localStorage.setItem(
      VITE_LOCALSTORAGE_CART_KEY_DATA,
      JSON.stringify({
        cart: defaultState.cart,
        delivery: defaultState.delivery,
        payment: defaultState.payment,
      })
    )
  }

  const strStorage = localStorage.getItem(VITE_LOCALSTORAGE_CART_KEY_DATA)
  return JSON.parse(strStorage || '{}')
}

export const setLocalStorage = (shop: ShopModel) => {
  const { cart, delivery, payment } = shop
  localStorage.setItem(
    VITE_LOCALSTORAGE_CART_KEY_DATA,
    JSON.stringify({ cart, delivery, payment })
  )
}

export const getCart = (): ProductsModel => {
  const data: ShopModel = getLocalStorage()
  return data.cart
}

export const getDelivery = (): DeliveryModel => {
  const data: ShopModel = getLocalStorage()
  return data.delivery
}

export const getPayment = (): PaymentType => {
  const data: ShopModel = getLocalStorage()
  return data.payment
}
