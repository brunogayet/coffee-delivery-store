import { StoreItem } from '../StoreItem'
import { StoreContainer, StoreList } from './styles'

export interface ListCoffee {
  id: string
  title: string
  subtitle: string
  price: number
  tags: string[]
  image: string
}

const storeItems: ListCoffee[] = [
  {
    id: '1',
    title: 'Expresso Tradicional',
    subtitle: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['tradicional'],
    image: '/images/Coffee-0.png',
  },
  {
    id: '5',
    title: 'Expresso Americano',
    subtitle: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['tradicional'],
    image: '/images/Coffee-4.png',
  },
  {
    id: '9',
    title: 'Expresso Cremoso',
    subtitle: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['tradicional'],
    image: '/images/Coffee-8.png',
  },
  {
    id: '12',
    title: 'Expresso Gelado',
    subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: ['tradicional', 'gelado'],
    image: '/images/Coffee-11.png',
  },
  {
    id: '2',
    title: 'Café com Leite',
    subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: '/images/Coffee-1.png',
  },
  {
    id: '6',
    title: 'Latte',
    subtitle: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: '/images/Coffee-5.png',
  },
  {
    id: '10',
    title: 'Capuccino',
    subtitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: '/images/Coffee-9.png',
  },
  {
    id: '13',
    title: 'Macchiato',
    subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: '/images/Coffee-12.png',
  },
  {
    id: '3',
    title: 'Mocaccino',
    subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    image: '/images/Coffee-2.png',
  },
  {
    id: '7',
    title: 'Chocolate Quente',
    subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    tags: ['especial', 'com leite'],
    image: '/images/Coffee-6.png',
  },
  {
    id: '11',
    title: 'Cubano',
    subtitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    tags: ['especial', 'alcoólico', 'com leite'],
    image: '/images/Coffee-10.png',
  },
  {
    id: '14',
    title: 'Havaiano',
    subtitle: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    tags: ['especial'],
    image: '/images/Coffee-13.png',
  },
  {
    id: '4',
    title: 'Árabe',
    subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    tags: ['especial'],
    image: '/images/Coffee-3.png',
  },
  {
    id: '8',
    title: 'Irlandês',
    subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: ['especial', 'alcoólico'],
    image: '/images/Coffee-7.png',
  },
]

export function Store() {
  return (
    <StoreContainer>
      <header>
        <h1>Nossos cafés</h1>
      </header>

      <StoreList>
        {storeItems.map((item) => (
          <StoreItem key={item.id} item={item} />
        ))}
      </StoreList>
    </StoreContainer>
  )
}
