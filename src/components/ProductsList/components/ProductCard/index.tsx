import { CartContext } from '@/contexts/Cart/CartContext'
import { ProductModel } from '@/contexts/Products/ProductsModel'
import { useContext } from 'react'
import { CardPurchase } from '../CardPurchase'
import {
  Description,
  Image,
  Item,
  ProductInfo,
  Tag,
  TagsContainer,
  Title,
} from './styled'

export const ProductCard = ({ product }: { product: ProductModel }) => {
  const { cartState } = useContext(CartContext)

  const isInCart = !!cartState.products.find((item) => item.id === product.id)

  return (
    <Item isInCart={isInCart}>
      <ProductInfo>
        <Image src={product.image} alt="" />
        <TagsContainer>
          {product.tags.map((tag: string) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
      </ProductInfo>

      <CardPurchase product={product} />
    </Item>
  )
}
