import { createContext, ReactNode, useReducer } from 'react'
import { cartReducer } from '../reducers/Cart/reducer'

export const StoreContext = createContext({})

interface StoreContextProviderProps {
  children: ReactNode
}

export function StoreContextProvider({ children }: StoreContextProviderProps) {
  const initialCart = {
    items: [],
  }

  const [cartState, dispatch] = useReducer(cartReducer, initialCart)
  return <StoreContext.Provider value={{}}>{children}</StoreContext.Provider>
}
