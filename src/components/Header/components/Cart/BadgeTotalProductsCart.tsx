import React from 'react';

import { ShopContext } from '@/contexts/Shop/ShopContext';
import { TotalProductsCart } from './styled';

export const BadgeTotalProductsCart = () => {
  const { cart } = React.useContext(ShopContext);

  const products = Object.values(cart);
  const total = products.reduce((acc, product) => {
    return acc + product.amount;
  }, 0);

  return total ? <TotalProductsCart>{total}</TotalProductsCart> : <></>;
};
