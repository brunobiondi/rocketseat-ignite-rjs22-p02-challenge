import { ShopContext } from '@/contexts/Shop/ShopContext';
import { ProductModel } from '@/contexts/Shop/ShopModel';
import { MouseEvent, useContext } from 'react';
import { AddRemoveCart, Amount, Container, Price } from './styled';

import svgCartWhite from '@/assets/cart-white.svg';
import svgMinus from '@/assets/minus.svg';
import svgMore from '@/assets/more.svg';
import svgRemove from '@/assets/remove.svg';

interface CardPurchaseProps {
  product: ProductModel;
}

export const CardPurchase = ({ product }: CardPurchaseProps) => {
  const { cartAdd, cartRemove, oneMore, oneLess } = useContext(ShopContext);

  const { _productKey: productKey } = product;

  const isInCart = Boolean(product.amount);
  const showAmount = isInCart ? product.amount : 1;

  const price = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(product.price);

  const handleOneMore = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    isInCart ? oneMore(productKey) : cartAdd(productKey, 2);
  };

  const handleOneLess = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (isInCart) oneLess(productKey);
  };

  const handleToggleToCart = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    isInCart ? cartRemove(productKey) : cartAdd(productKey, 1);
  };

  return (
    <Container>
      <Price>
        <span>R$</span> {price}
      </Price>

      <Amount>
        <a href="#" onClick={handleOneLess}>
          <img src={svgMinus} alt="" />
        </a>
        <span>{showAmount}</span>
        <a href="#" onClick={handleOneMore}>
          <img src={svgMore} alt="" />
        </a>
      </Amount>

      <AddRemoveCart href="#" onClick={handleToggleToCart} isInCart={isInCart}>
        {isInCart ? (
          <img src={svgRemove} alt="" />
        ) : (
          <img src={svgCartWhite} alt="" />
        )}
      </AddRemoveCart>
    </Container>
  );
};
