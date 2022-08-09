import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { LocationButton, HeaderContainer, CartButton } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />

      <nav>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocationButton>

        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </nav>
    </HeaderContainer>
  )
}
