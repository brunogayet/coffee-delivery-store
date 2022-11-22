import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { StoreContext } from '../../../../contexts/StoreContext'
import { ListCoffee } from '../Store'

import {
  ButtonOperationItemCart,
  CartButton,
  ContainerButtonOperation,
  ContentStoreItem,
  FooterStoreItem,
  HeaderStoreItem,
  IncrementItemCart,
  StoreItemContainer,
} from './styles'
interface StoreItemProps {
  item: ListCoffee
}

export function StoreItem({ item }: StoreItemProps) {
  const { addItemToCart } = useContext(StoreContext)
  const [itemQty, setItemQty] = useState(1)

  function handleIncrementItem() {
    setItemQty((state) => state + 1)
  }

  function handleDecrementItem() {
    if (itemQty > 1) {
      setItemQty((state) => state - 1)
    }
  }

  function handleAddItemToCart() {
    const { id, title, price, image } = item

    addItemToCart({
      id,
      title,
      price,
      image,
      qty: itemQty,
    })
  }

  return (
    <StoreItemContainer>
      <HeaderStoreItem>
        <img src={item.image} alt="" />
        <div>
          {item.tags.map((tag) => (
            <span key={item.id + tag}>{tag}</span>
          ))}
        </div>
      </HeaderStoreItem>

      <ContentStoreItem>
        <strong>{item.title}</strong>
        <p>{item.subtitle}</p>
      </ContentStoreItem>
      <FooterStoreItem>
        <div>
          <p>
            R${' '}
            <strong>
              {new Intl.NumberFormat('pt-BR', {
                minimumFractionDigits: 2,
              }).format(item.price)}
            </strong>
          </p>
        </div>

        <IncrementItemCart>
          <ContainerButtonOperation>
            <ButtonOperationItemCart onClick={handleDecrementItem}>
              <Minus weight="bold" />
            </ButtonOperationItemCart>

            <span>{itemQty}</span>

            <ButtonOperationItemCart onClick={handleIncrementItem}>
              <Plus weight="bold" />
            </ButtonOperationItemCart>
          </ContainerButtonOperation>

          <CartButton
            onClick={handleAddItemToCart}
            title="Adicionar item ao carrinho"
          >
            <ShoppingCartSimple size={22} weight="fill" />
          </CartButton>
        </IncrementItemCart>
      </FooterStoreItem>
    </StoreItemContainer>
  )
}
