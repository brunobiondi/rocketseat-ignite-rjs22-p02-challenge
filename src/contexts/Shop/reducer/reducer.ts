import produce from 'immer';
import { setCart as updateLocalStorage } from '../cartLocalStorage';
import { ShopModel } from '../ShopModel';
import { ActionModel, ActionTypes } from './ActionModel';

export const shopReducer = (state: ShopModel, action: ActionModel) => {
  const {
    type,
    payload: { productKey, amount = 0 },
  } = action;

  switch (type) {
    case ActionTypes.CART_ADD_ITEM:
      return produce(state, (draft) => {
        draft.products[productKey].amount = amount as number;
        draft.cart[productKey] = draft.products[productKey];
        updateLocalStorage(draft.cart);
      });

    case ActionTypes.CART_REMOVE_ITEM:
      return produce(state, (draft) => {
        draft.products[productKey].amount = 0;
        delete draft.cart[productKey];
        updateLocalStorage(draft.cart);
      });

    case ActionTypes.CART_PRODUCT_MORE:
      return produce(state, (draft) => {
        draft.products[productKey].amount++;
        draft.cart[productKey] = draft.products[productKey];
        updateLocalStorage(draft.cart);
      });

    case ActionTypes.CART_PRODUCT_LESS:
      return produce(state, (draft) => {
        draft.products[productKey].amount--;

        draft.products[productKey].amount > 0
          ? (draft.cart[productKey] = draft.products[productKey])
          : delete draft.cart[productKey];

        updateLocalStorage(draft.cart);
      });

    default:
      return state;
  }
};
