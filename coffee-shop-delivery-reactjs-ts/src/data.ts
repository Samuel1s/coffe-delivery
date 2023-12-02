import coffeeExpressoTradicionalImg from './assets/coffee_tags/Coffee_Expresso_Tradicional.svg'
import coffeeExpressoAmericanoImg from './assets/coffee_tags/Coffee_Expresso_Americano.svg'
import coffeeExpressoCremosoImg from './assets/coffee_tags/Coffee_Expresso_Cremoso.svg'
import coffeeExpressoGeladoImg from './assets/coffee_tags/Coffee_Expresso_Gelado.svg'
import coffeeChocolateQuente from './assets/coffee_tags/Coffee_Chocolate_Quente.svg'
import coffeeCafeComLeite from './assets/coffee_tags/Coffee_Cafe_Com_Leite.svg'
import coffeeCapuccino from './assets/coffee_tags/Coffee_Capuccino.svg'
import coffeeMacchiato from './assets/coffee_tags/Coffee_Macchiato.svg'
import coffeeMocaccino from './assets/coffee_tags/Coffee_Mocaccino.svg'
import coffeeIrlandes from './assets/coffee_tags/Coffee_Irlandes.svg'
import coffeeHavaiano from './assets/coffee_tags/Coffee_Havaiano.svg'
import coffeeCubano from './assets/coffee_tags/Coffee_Cubano.svg'
import coffeeLatte from './assets/coffee_tags/Coffee_Latte.svg'
import coffeeArabe from './assets/coffee_tags/Coffee_Arabe.svg'
import { v4 as uuidv4 } from 'uuid'

export const coffees = [
  {
    id: uuidv4(),
    tags: ['TRADICIONAL'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    image: coffeeExpressoTradicionalImg,
  },
  {
    id: uuidv4(),
    tags: ['TRADICIONAL'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    image: coffeeExpressoAmericanoImg,
  },
  {
    id: uuidv4(),
    tags: ['TRADICIONAL'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    image: coffeeExpressoCremosoImg,
  },
  {
    id: uuidv4(),
    tags: ['TRADICIONAL', 'GELADO'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    image: coffeeExpressoGeladoImg,
  },
  {
    id: uuidv4(),
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    image: coffeeCafeComLeite,
  },
  {
    id: uuidv4(),
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    image: coffeeLatte,
  },
  {
    id: uuidv4(),
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    image: coffeeCapuccino,
  },
  {
    id: uuidv4(),
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    image: coffeeMacchiato,
  },
  {
    id: uuidv4(),
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    image: coffeeMocaccino,
  },
  {
    id: uuidv4(),
    tags: ['ESPECIAL', 'COM LEITE'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    image: coffeeChocolateQuente,
  },
  {
    id: uuidv4(),
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    image: coffeeCubano,
  },
  {
    id: uuidv4(),
    tags: ['ESPECIAL'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    image: coffeeHavaiano,
  },
  {
    id: uuidv4(),
    tags: ['ESPECIAL'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    image: coffeeArabe,
  },
  {
    id: uuidv4(),
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    image: coffeeIrlandes,
  },
]
