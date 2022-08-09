import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import bannerImage from '../../../../assets/banner-coffee.png'
import {
  BannerBackground,
  BannerContainer,
  BannerList,
  BannerText,
  IconList,
} from './styles'

export function Banner() {
  return (
    <BannerContainer>
      <BannerBackground />

      <div>
        <BannerText>
          <header>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </header>

          <BannerList>
            <ul>
              <li>
                <IconList color="yellow-dark">
                  <ShoppingCart size={16} weight="fill" />
                </IconList>
                <p>Compra simples e segura</p>
              </li>
              <li>
                <IconList color="yellow">
                  <Timer size={16} weight="fill" />
                </IconList>
                <p>Entrega rápida e rastreada</p>
              </li>
              <li>
                <IconList color="gray">
                  <Package size={16} weight="fill" />
                </IconList>
                Embalagem mantém o café intacto
              </li>
              <li>
                <IconList color="purple">
                  <Coffee size={16} weight="fill" />
                </IconList>
                O café chega fresquinho até você
              </li>
            </ul>
          </BannerList>
        </BannerText>

        <img src={bannerImage} alt="" />
      </div>
    </BannerContainer>
  )
}
