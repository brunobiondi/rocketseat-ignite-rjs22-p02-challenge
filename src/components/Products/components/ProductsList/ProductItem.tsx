import { Description, Image, Item, ProductInfo, Tag, Title } from './styled'

import imgCoffee from '@public/products/coffee-1.png'

export const ProductItem = () => {
  return (
    <Item>
      <ProductInfo>
        <Image src={imgCoffee} alt="" />
        <Tag>Tradicional</Tag>
        <Title>Expresso Tradicional</Title>
        <Description>
          O tradicional café feito com água quente e grãos moídos
        </Description>
      </ProductInfo>
    </Item>
  )
}
