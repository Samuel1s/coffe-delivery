import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { CoffeeContextType } from '../../../../context/CoffeeContext'
import {
  BuyContainer,
  CardContainer,
  TypeContainer,
  TypeList,
  ShoppingCartButton,
  ActionContainer,
  PriceContainer,
} from './styles'

export function CoffeeComponent({
  image,
  types,
  name,
  description,
  price,
}: CoffeeContextType) {
  const [qtd, setQtd] = useState(1)

  return (
    <CardContainer>
      <img src={image} alt="" />
      <TypeContainer>
        {types.map((type, index) => (
          <TypeList key={index}>{type}</TypeList>
        ))}
      </TypeContainer>
      <h3>{name}</h3>
      <p>{description}</p>
      <BuyContainer>
        <PriceContainer>
          <span>R$&nbsp;</span>
          <span>{String(price).padEnd(4, '0').replace('.', ',')}</span>
        </PriceContainer>
        <ActionContainer>
          <button>
            <Minus size={16} />
          </button>
          <span>{qtd}</span>
          <button>
            <Plus size={16} />
          </button>
        </ActionContainer>
        <ShoppingCartButton>
          <ShoppingCart size={24} weight="fill" />
        </ShoppingCartButton>
      </BuyContainer>
    </CardContainer>
  )
}
