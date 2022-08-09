import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { Coffee } from '../../../../reducers/Cart/reducer'

import {
  ButtonOperationItemCart,
  CartButton,
  ContentStoreItem,
  FooterStoreItem,
  HeaderStoreItem,
  IncrementItemCart,
  StoreItemContainer,
} from './styles'

interface StoreItemProps {
  item: Coffee
}

export function StoreItem({ item }: StoreItemProps) {
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
          <div>
            <ButtonOperationItemCart>
              <Minus weight="bold" />
            </ButtonOperationItemCart>
            <span>1</span>
            <ButtonOperationItemCart>
              <Plus weight="bold" />
            </ButtonOperationItemCart>
          </div>

          <CartButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </CartButton>
        </IncrementItemCart>
      </FooterStoreItem>
    </StoreItemContainer>
  )
}
