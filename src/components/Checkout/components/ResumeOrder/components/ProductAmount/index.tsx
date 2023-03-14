import { ShopContext } from '@/contexts/Shop/ShopContext';
import { ProductModel } from '@/contexts/Shop/ShopModel';
import { MouseEvent, useContext } from 'react';
import { Amount, Container, RemoveCart } from './styled';

import svgMinus from '@/assets/minus.svg';
import svgMore from '@/assets/more.svg';
import svgRemove from '@/assets/remove.svg';

interface CardPurchaseProps {
  product: ProductModel;
}

export const ProductAmount = ({ product }: CardPurchaseProps) => {
  const { cartRemove, oneMore, oneLess } = useContext(ShopContext);

  const { _productKey: productKey } = product;

  const isInCart = Boolean(product.amount);
  const showAmount = isInCart ? product.amount : 1;

  const handleOneMore = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    oneMore(productKey);
  };

  const handleOneLess = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    product.amount > 1 && oneLess(productKey);
  };

  const handleRemoveToCart = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    cartRemove(productKey);
  };

  return (
    <Container>
      <Amount>
        <a href="#" onClick={handleOneLess}>
          <img src={svgMinus} alt="" />
        </a>
        <span>{showAmount}</span>
        <a href="#" onClick={handleOneMore}>
          <img src={svgMore} alt="" />
        </a>
      </Amount>

      <RemoveCart href="#" onClick={handleRemoveToCart}>
        <img src={svgRemove} alt="" />
        Remover
      </RemoveCart>
    </Container>
  );
};
