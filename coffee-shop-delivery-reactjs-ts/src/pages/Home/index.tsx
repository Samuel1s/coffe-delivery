import {
  IntroContainer,
  ItemDescriptionContainer,
  ItemsDescriptionContainer,
  TitleContainer,
  IconContainer,
  CoffeeListContainer,
} from './styles'

import LogoCoffeeDelivery from '../../assets/Coffee-Delivery-Intro.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { CoffeeContext } from '../../context/CoffeeContext'
import { useContext } from 'react'
import { CoffeeComponent } from './components/Coffee'

export function Home() {
  const { coffeeDefaultList } = useContext(CoffeeContext)

  return (
    <>
      <IntroContainer>
        <div>
          <TitleContainer>
            <h1>
              Encontre o café perfeito <br></br> para qualquer hora do dia
            </h1>
            <h4>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h4>
          </TitleContainer>
          <ItemsDescriptionContainer>
            <div>
              <ItemDescriptionContainer>
                <IconContainer variant="orange">
                  <ShoppingCart size={24} weight="fill" />
                </IconContainer>
                <span>Compra simples e segura</span>
              </ItemDescriptionContainer>
              <ItemDescriptionContainer>
                <IconContainer variant="yellow">
                  <Timer size={24} weight="fill" />
                </IconContainer>
                <span>Entrega rápida e rastreada</span>
              </ItemDescriptionContainer>
            </div>
            <div>
              <ItemDescriptionContainer>
                <IconContainer variant="brown">
                  <Package size={24} weight="fill" />
                </IconContainer>
                <span>Embalagem mantém o café intacto</span>
              </ItemDescriptionContainer>
              <ItemDescriptionContainer>
                <IconContainer variant="purple">
                  <Coffee size={24} weight="fill" />
                </IconContainer>
                <span>O café chega fresquinho até você</span>
              </ItemDescriptionContainer>
            </div>
          </ItemsDescriptionContainer>
        </div>
        <img
          src={LogoCoffeeDelivery}
          alt="Logo on Intro section that means a coffee cup."
        />
      </IntroContainer>
      <CoffeeListContainer>
        <h1>Nossos cafés</h1>
        <div>
          {coffeeDefaultList.map((coffee) => {
            return <CoffeeComponent key={coffee.id} {...coffee} />
          })}
        </div>
      </CoffeeListContainer>
    </>
  )
}
