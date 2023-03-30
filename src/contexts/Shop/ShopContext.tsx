import { createContext, PropsWithChildren, ReducerState, useReducer } from 'react'
import { getCart, getDelivery, getPayment } from './cartLocalStorage'
import * as actions from './reducer/actions'
import { shopReducer } from './reducer/reducer'
import { DeliveryModel, PaymentType, ShopContextModel, ShopModel } from './ShopModel'
import * as defaultState from './ShopDefaultState'

export const ShopContext = createContext<ShopContextModel>(
  {} as ShopContextModel,
)

export const ShopContextProvider = ({ children }: PropsWithChildren) => {
  const initialState: ShopModel = {
    cart: getCart(),
    products: { ...defaultState.products, ...getCart() },
    delivery: getDelivery(),
    payment: getPayment(),
  }

  const [{ cart, products, delivery, payment }, dispatch] = useReducer(
    shopReducer,
    initialState as ReducerState<ShopModel>,
  )

  const cartAdd = (productKey: string, amount: number) => {
    dispatch(actions.cartAdd(productKey, amount))
  }

  const cartRemove = (productKey: string) => {
    dispatch(actions.cartRemove(productKey))
  }

  const oneMore = (productKey: string) => {
    dispatch(actions.oneMore(productKey))
  }

  const oneLess = (productKey: string) => {
    dispatch(actions.oneLess(productKey))
  }

  const setDelivery = (delivery: DeliveryModel) => {
    dispatch(actions.deliverySetFields(delivery))
  }

  const setPayment = (payment: PaymentType) => {
    dispatch(actions.paymentSetMethod(payment))
  }

  return (
    <ShopContext.Provider
      value={{
        cart,
        products,
        delivery,
        payment,
        cartAdd,
        cartRemove,
        oneMore,
        oneLess,
        setDelivery,
        setPayment,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
