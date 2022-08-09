export interface Drink {
  id: string
  title: string
  subtitle: string
  price: number
  tags: string[]
  image: string
}

interface CartState {
  items: Drink[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    default:
      return state
  }
}
