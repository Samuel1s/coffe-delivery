import { NavLink } from 'react-router-dom'
import coffeeLogo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, LocationContent, CartContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeLogo} alt="" />
      <nav>
        <NavLink to="/" title="Shop">
          <LocationContent>
            <MapPin size={24} weight="fill" /> Minas Gerais, MG
          </LocationContent>
        </NavLink>
        <NavLink to="/cart" title="Cart">
          <CartContent>
            <ShoppingCart size={24} weight="fill" />
          </CartContent>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
