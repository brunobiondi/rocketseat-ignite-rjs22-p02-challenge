import { ProductModel } from '@/contexts/ProductsModel'
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
  return (
    <Item>
      <ProductInfo>
        <Image src={product.image} alt="" />
        <TagsContainer>
          {product.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
      </ProductInfo>

      <CardPurchase />
    </Item>
  )
}
