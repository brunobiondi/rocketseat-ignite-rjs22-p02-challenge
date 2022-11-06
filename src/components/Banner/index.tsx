import {
  BannerTexts,
  Container,
  FeatureList,
  Headline,
  Subtitle,
  Wrapper
} from "./styled";

import imgBanner from '@/assets/banner.png';
import { ReactComponent as IconCartCircle } from "@/assets/cart-circle.svg";
import { ReactComponent as IconCoffeeCircle } from "@/assets/coffee-circle.svg";
import { ReactComponent as IconPackageCircle } from "@/assets/package-circle.svg";
import { ReactComponent as IconTimerCircle } from "@/assets/timer-circle.svg";

export const Banner = () => {
  return (
    <Wrapper>
      <Container>
        <BannerTexts>
          <Headline>
            Encontre o café perfeito para qualquer hora do dia
          </Headline>

          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>

          <FeatureList>
            <li>
              <IconCartCircle />
              Compra simples e segura
            </li>
            <li>
              <IconPackageCircle />
              Embalagem mantém o café intacto
            </li>
          </FeatureList>

          <FeatureList>
            <li>
              <IconTimerCircle />
              Entrega rápida e rastreada
            </li>
            <li>
              <IconCoffeeCircle />O café chega fresquinho até você
            </li>
          </FeatureList>
        </BannerTexts>

        <img src={imgBanner} alt="" />
      </Container>
    </Wrapper>
  );
};
