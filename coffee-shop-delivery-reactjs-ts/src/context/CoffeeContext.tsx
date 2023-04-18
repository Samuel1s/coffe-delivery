import coffeeExpressoTradicionalImg from '../assets/coffee_types/Coffee_Expresso_Tradicional.svg'
import coffeeExpressoAmericanoImg from '../assets/coffee_types/Coffee_Expresso_Americano.svg'
import coffeeExpressoCremosoImg from '../assets/coffee_types/Coffee_Expresso_Cremoso.svg'
import coffeeExpressoGeladoImg from '../assets/coffee_types/Coffee_Expresso_Gelado.svg'
import coffeeChocolateQuente from '../assets/coffee_types/Coffee_Chocolate_Quente.svg'
import coffeeCafeComLeite from '../assets/coffee_types/Coffee_Cafe_Com_Leite.svg'
import coffeeCapuccino from '../assets/coffee_types/Coffee_Capuccino.svg'
import coffeeMacchiato from '../assets/coffee_types/Coffee_Macchiato.svg'
import coffeeMocaccino from '../assets/coffee_types/Coffee_Mocaccino.svg'
import coffeeIrlandes from '../assets/coffee_types/Coffee_Irlandes.svg'
import coffeeHavaiano from '../assets/coffee_types/Coffee_Havaiano.svg'
import coffeeCubano from '../assets/coffee_types/Coffee_Cubano.svg'
import coffeeLatte from '../assets/coffee_types/Coffee_Latte.svg'
import coffeeArabe from '../assets/coffee_types/Coffee_Arabe.svg'

import { createContext, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface CoffeeContextType {
  id: string
  types: string[]
  name: string
  description: string
  price: number
  image: string
}

interface CoffeeShopListType {
  coffeeDefaultList: CoffeeContextType[]
}

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeShopListType)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const coffeeDefaultList = [
    {
      id: uuidv4(),
      types: ['TRADICIONAL'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      image: coffeeExpressoTradicionalImg,
    },
    {
      id: uuidv4(),
      types: ['TRADICIONAL'],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      image: coffeeExpressoAmericanoImg,
    },
    {
      id: uuidv4(),
      types: ['TRADICIONAL'],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      image: coffeeExpressoCremosoImg,
    },
    {
      id: uuidv4(),
      types: ['TRADICIONAL', 'GELADO'],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      image: coffeeExpressoGeladoImg,
    },
    {
      id: uuidv4(),
      types: ['TRADICIONAL', 'COM LEITE'],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      image: coffeeChocolateQuente,
    },
    {
      id: uuidv4(),
      types: ['TRADICIONAL', 'COM LEITE'],
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      image: coffeeLatte,
    },
    {
      id: uuidv4(),
      types: ['TRADICIONAL', 'COM LEITE'],
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      image: coffeeCapuccino,
    },
    {
      id: uuidv4(),
      types: ['TRADICIONAL', 'COM LEITE'],
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      image: coffeeMacchiato,
    },
    {
      id: uuidv4(),
      types: ['TRADICIONAL', 'COM LEITE'],
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      image: coffeeMocaccino,
    },
    {
      id: uuidv4(),
      types: ['ESPECIAL', 'COM LEITE'],
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
      image: coffeeChocolateQuente,
    },
    {
      id: uuidv4(),
      types: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      image: coffeeCubano,
    },
    {
      id: uuidv4(),
      types: ['ESPECIAL'],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      image: coffeeHavaiano,
    },
    {
      id: uuidv4(),
      types: ['ESPECIAL'],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
      image: coffeeArabe,
    },
    {
      id: uuidv4(),
      types: ['ESPECIAL', 'ALCOÓLICO'],
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      image: coffeeArabe,
    },
  ]

  return (
    <CoffeeContext.Provider
      value={{
        coffeeDefaultList,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
