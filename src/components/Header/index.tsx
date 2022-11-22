import { useContext } from 'react'
import { StoreContext } from '../../contexts/StoreContext'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { LocationButton, HeaderContainer, CartButton } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { totalItems } = useContext(StoreContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>

      <nav>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocationButton>

        <NavLink to="/checkout" title="Checkout">
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
            {totalItems > 0 && <span>{totalItems}</span>}
          </CartButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
