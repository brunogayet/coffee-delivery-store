import { Minus, Plus, Trash } from 'phosphor-react'
import { FormEvent, useContext } from 'react'
import { StoreContext } from '../../../../contexts/StoreContext'
import { Coffee } from '../../../../reducers/Purchase/reducer'
import {
  ButtonOperationItemCart,
  ContainerButtonOperation,
} from '../../../Home/components/StoreItem/styles'
import {
  ButtonRemoveItem,
  ItemTitle,
  ListSummaryItemContainer,
  OperationItemCart,
} from './styles'

interface ListSummaryItemProps {
  item: Coffee
}

export function ListSummaryItem({ item }: ListSummaryItemProps) {
  const { incrementCartItem, decrementCartItem, removeCartItem } =
    useContext(StoreContext)

  const formatterSubtotal = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(item.subtotal!)

  function handleIncrementItem(event: FormEvent) {
    event.preventDefault()

    incrementCartItem(item.id)
  }

  function handleDecrementItem(event: FormEvent) {
    event.preventDefault()

    decrementCartItem(item.id)
  }

  function handleRemoveItem(event: FormEvent) {
    event.preventDefault()

    removeCartItem(item.id)
  }

  return (
    <ListSummaryItemContainer>
      <div>
        <img src={item.image} alt="" />

        <div>
          <ItemTitle>{item.title}</ItemTitle>
          <OperationItemCart>
            <ContainerButtonOperation>
              <ButtonOperationItemCart onClick={handleDecrementItem}>
                <Minus weight="bold" />
              </ButtonOperationItemCart>

              <span>{item.qty}</span>

              <ButtonOperationItemCart onClick={handleIncrementItem}>
                <Plus weight="bold" />
              </ButtonOperationItemCart>
            </ContainerButtonOperation>

            <ButtonRemoveItem onClick={handleRemoveItem}>
              <Trash size={16} />
              <span>REMOVER</span>
            </ButtonRemoveItem>
          </OperationItemCart>
        </div>
      </div>
      <span>R$ {formatterSubtotal}</span>
    </ListSummaryItemContainer>
  )
}
