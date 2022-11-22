import { useContext, useEffect } from 'react'
import { StoreContext } from '../../contexts/StoreContext'

import { NewOrderFormData } from '../Checkout'

import { IconListSuccess, InfoPurchase, SuccessContainer } from './styles'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import successPurchase from '../../assets/successPurchase.svg'
import { useNavigate } from 'react-router-dom'

export function Success() {
  const { resetCart, totalItems } = useContext(StoreContext)
  const navigate = useNavigate()

  const localStoredPurchaseInfoState = localStorage.getItem(
    '@coffee-delivery:purchase-info-1.0.0',
  )

  const { street, number, neighborhood, city, state, paymentMethod } =
    JSON.parse(localStoredPurchaseInfoState!) as NewOrderFormData

  useEffect(() => {
    if (totalItems > 0 && localStoredPurchaseInfoState) {
      resetCart()
    } else {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <main>
        <InfoPurchase>
          <div>
            <IconListSuccess color="purple">
              <MapPin size={16} weight="fill" />
            </IconListSuccess>
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {street}, {number}
                </strong>
              </p>
              <span>
                {neighborhood} - {city}, {state}
              </span>
            </div>
          </div>

          <div>
            <IconListSuccess color="yellow">
              <Timer size={16} weight="fill" />
            </IconListSuccess>
            <div>
              <p>Previsão de entrega</p>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </div>
          </div>

          <div>
            <IconListSuccess color="yellow-dark">
              <CurrencyDollar size={16} weight="fill" />
            </IconListSuccess>
            <div>
              <p>Pagamento na entrega</p>
              <span>
                <strong>{paymentMethod}</strong>
              </span>
            </div>
          </div>
        </InfoPurchase>
        <img src={successPurchase} alt="Purchase was finished with success" />
      </main>
    </SuccessContainer>
  )
}
