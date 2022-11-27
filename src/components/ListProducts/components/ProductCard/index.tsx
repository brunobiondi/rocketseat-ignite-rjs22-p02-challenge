import { ProductModel } from '@/contexts/Shop/ShopModel'
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

interface ProductCardProps {
  product: ProductModel
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const isInCart = Boolean(product.amount)

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
