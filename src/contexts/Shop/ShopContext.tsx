import { createContext, PropsWithChildren, useReducer } from 'react';
import { getCart } from './cartLocalStorage';
import listProducts from './products.json';
import * as actions from './reducer/actions';
import { shopReducer } from './reducer/reducer';
import { ShopContextModel, ShopModel } from './ShopModel';

export const ShopContext = createContext<ShopContextModel>(
  {} as ShopContextModel
);

export const ShopContextProvider = ({ children }: PropsWithChildren) => {
  const cartLocalStorage = getCart();
  const initialState: ShopModel = {
    cart: getCart(),
    products: { ...listProducts, ...cartLocalStorage },
    delivery: {
      cep: 91910001,
      state: 'RS',
      city: 'Porto Alegre',
      neighborhood: 'Tristeza',
      street: 'Avenida Otto Niemeyer',
      number: '',
      apartment_unit: '',
    },
    payment: null,
  };

  const [{ cart, products, delivery, payment }, dispatch] = useReducer(
    shopReducer,
    initialState
  );

  const cartAdd = (productKey: string, amount: number) => {
    dispatch(actions.cartAdd(productKey, amount));
  };

  const cartRemove = (productKey: string) => {
    dispatch(actions.cartRemove(productKey));
  };

  const oneMore = (productKey: string) => {
    dispatch(actions.oneMore(productKey));
  };

  const oneLess = (productKey: string) => {
    dispatch(actions.oneLess(productKey));
  };

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
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
