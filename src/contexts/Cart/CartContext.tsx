import { createContext, PropsWithChildren, useReducer } from 'react'
import { ProductModel } from '../Products/ProductsModel'
import { CartModel } from './CartModel'
import {
  addAmount,
  addProduct,
  removeAmount,
  removeProduct,
} from './reducer/actions'
import { cartReducer } from './reducer/reducer'

export interface CartContextModel {
  contextAddProduct: (product: ProductModel, amount: number) => void
  contextRemoveProduct: (product: ProductModel) => void
  contextAddAmount: (product: ProductModel) => void
  contextRemoveAmount: (product: ProductModel) => void
  cartState: CartModel
}

export const CartContext = createContext<CartContextModel>(
  {} as CartContextModel,
)

const initialState = {
  products: [],
} as CartModel

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState)

  const contextAddProduct = (product: ProductModel, amount: number) => {
    dispatch(addProduct(product, amount))
  }

  const contextRemoveProduct = (product: ProductModel) => {
    dispatch(removeProduct(product))
  }

  const contextAddAmount = (product: ProductModel) => {
    dispatch(addAmount(product))
  }

  const contextRemoveAmount = (product: ProductModel) => {
    dispatch(removeAmount(product))
  }

  return (
    <CartContext.Provider
      value={{
        contextAddProduct,
        contextRemoveProduct,
        contextAddAmount,
        contextRemoveAmount,
        cartState,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
