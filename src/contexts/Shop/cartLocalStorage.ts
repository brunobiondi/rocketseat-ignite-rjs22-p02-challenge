import { ProductsModel } from './ShopModel'

const {
  VITE_LOCALSTORAGE_CART_VERSION,
  VITE_LOCALSTORAGE_CART_KEY_DATA,
  VITE_LOCALSTORAGE_CART_KEY_VERSION,
} = import.meta.env

export const getCart = (): ProductsModel => {
  const version = localStorage.getItem(VITE_LOCALSTORAGE_CART_KEY_VERSION)
  const isNull = version === null
  const isDiff = version !== VITE_LOCALSTORAGE_CART_VERSION

  if (isNull || isDiff) {
    localStorage.setItem(
      VITE_LOCALSTORAGE_CART_KEY_VERSION,
      VITE_LOCALSTORAGE_CART_VERSION,
    )
    localStorage.setItem(VITE_LOCALSTORAGE_CART_KEY_DATA, '{}')
  }

  const data = localStorage.getItem(VITE_LOCALSTORAGE_CART_KEY_DATA)
  return JSON.parse(data || '{}')
}

export const setCart = (cart: ProductsModel) => {
  localStorage.setItem(VITE_LOCALSTORAGE_CART_KEY_DATA, JSON.stringify(cart))
}
