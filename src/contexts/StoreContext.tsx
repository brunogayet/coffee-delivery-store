import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  addItemToCartAction,
  decrementCartItemAction,
  incrementCartItemAction,
  removeCartItemAction,
  resetCartAction,
} from '../reducers/Purchase/actions'

import { purchaseReducer, Coffee } from '../reducers/Purchase/reducer'

interface StoreContextType {
  cart: Coffee[]
  totalItems: number
  total: number
  addItemToCart: (newItem: Coffee) => void
  incrementCartItem: (itemId: string) => void
  decrementCartItem: (itemId: string) => void
  removeCartItem: (itemId: string) => void
  resetCart: () => void
}

interface StoreContextProviderProps {
  children: ReactNode
}

interface PurchaseReducerProps {
  cart: Coffee[]
}

export const StoreContext = createContext({} as StoreContextType)

export const STORE_CART_STATE_KEY = '@coffee-delivery:cart-state-1.0.0'

export function StoreContextProvider({ children }: StoreContextProviderProps) {
  const initialPurchase: PurchaseReducerProps = {
    cart: [],
  }

  const [purchaseState, dispatch] = useReducer(
    purchaseReducer,
    initialPurchase,
    (initialPurchase) => {
      const localStoredStateAsJson = localStorage.getItem(STORE_CART_STATE_KEY)

      if (localStoredStateAsJson) {
        return JSON.parse(localStoredStateAsJson)
      }

      return initialPurchase
    },
  )

  const { cart } = purchaseState

  const totals = cart.reduce(
    (acc, item) => {
      acc.totalItems += item.qty
      acc.total += Number(item.subtotal!.toFixed(2))

      return acc
    },
    {
      totalItems: 0,
      total: 0,
    },
  )

  useEffect(() => {
    const localStateJSON = JSON.stringify(purchaseState)

    localStorage.setItem(STORE_CART_STATE_KEY, localStateJSON)
  }, [purchaseState])

  function addItemToCart(newItem: Coffee) {
    dispatch(addItemToCartAction(newItem))
  }

  function incrementCartItem(itemId: string) {
    dispatch(incrementCartItemAction(itemId))
  }

  function decrementCartItem(itemId: string) {
    dispatch(decrementCartItemAction(itemId))
  }

  function removeCartItem(itemId: string) {
    dispatch(removeCartItemAction(itemId))
  }

  function resetCart() {
    dispatch(resetCartAction())
  }

  return (
    <StoreContext.Provider
      value={{
        cart,
        totalItems: totals.totalItems,
        total: totals.total,
        addItemToCart,
        incrementCartItem,
        decrementCartItem,
        removeCartItem,
        resetCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
