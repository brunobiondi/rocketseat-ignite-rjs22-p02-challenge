import { ProductPurchase } from '../ProductPurchase'
import { Description, Image, Item, ProductInfo, Tag, Title } from './styled'

export const ProductItem = () => {
  return (
    <Item>
      <ProductInfo>
        <Image src="/products/coffee-1.png" alt="" />
        <Tag>Tradicional</Tag>
        <Title>Expresso Tradicional</Title>
        <Description>
          O tradicional café feito com água quente e grãos moídos
        </Description>
      </ProductInfo>
      <ProductPurchase />
    </Item>
  )
}
