import { Amount, Container, Price } from './styled'

import svgMinus from '@/assets/minus.svg'
import svgMore from '@/assets/more.svg'

export const ProductPurchase = () => {
  return (
    <Container>
      <Price>
        <span>R$</span> 9,90
      </Price>

      <Amount>
        <a href="#">
          <img src={svgMinus} alt="" />
        </a>
        <span>1</span>
        <a href="#">
          <img src={svgMore} alt="" />
        </a>
      </Amount>
    </Container>
  )
}
