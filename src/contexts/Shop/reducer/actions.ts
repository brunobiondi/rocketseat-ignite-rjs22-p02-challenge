import { ActionTypes } from './ActionModel';

export const cartAdd = (productKey: string, amount = 1) => ({
  type: ActionTypes.CART_ADD_ITEM,
  payload: { productKey, amount },
});

export const cartRemove = (productKey: string) => ({
  type: ActionTypes.CART_REMOVE_ITEM,
  payload: { productKey },
});

export const oneMore = (productKey: string) => ({
  type: ActionTypes.CART_PRODUCT_MORE,
  payload: { productKey },
});

export const oneLess = (productKey: string) => ({
  type: ActionTypes.CART_PRODUCT_LESS,
  payload: { productKey },
});
