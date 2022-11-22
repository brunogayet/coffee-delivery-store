import { useContext } from 'react'
import { StoreContext } from '../../../../contexts/StoreContext'
import { ListSummaryItem } from '../ListSummaryItem'
import {
  ButtonConfirmationOrder,
  CartEmpty,
  FormSummaryConfirmation,
  OrderSummaryContainer,
  TotalOrder,
} from './styles'

export function OrderSummary() {
  const { cart, total } = useContext(StoreContext)

  const isCartEmpty = cart.length === 0
  const shipping = isCartEmpty ? 0 : 3.5

  const formatterTotal = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(total)

  const formatterShipping = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(shipping)

  const formatterTotalPlusShipping = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(total + shipping)

  return (
    <OrderSummaryContainer>
      <h2>Cafés selecionados</h2>

      <FormSummaryConfirmation>
        {!isCartEmpty && (
          <>
            <div>
              {cart.map((item) => (
                <ListSummaryItem key={item.id} item={item} />
              ))}
            </div>

            <footer>
              <div>
                <p>Total de itens</p>
                <span>R$ {formatterTotal}</span>
              </div>

              <div>
                <p>Entrega</p>
                <span>R$ {formatterShipping}</span>
              </div>

              <TotalOrder>
                <p>Total</p>
                <span>R$ {formatterTotalPlusShipping}</span>
              </TotalOrder>

              <ButtonConfirmationOrder disabled={isCartEmpty} type="submit">
                CONFIRMAR PEDIDO
              </ButtonConfirmationOrder>
            </footer>
          </>
        )}
        {isCartEmpty && (
          <CartEmpty>
            <p>Seu carrinho está vazio.</p>
            <span>
              Torne seu dia mais especial adicionando um delicioso café!
            </span>
          </CartEmpty>
        )}
      </FormSummaryConfirmation>
    </OrderSummaryContainer>
  )
}
