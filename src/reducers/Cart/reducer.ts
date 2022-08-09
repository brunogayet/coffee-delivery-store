export interface Coffee {
  id: string
  title: string
  subtitle: string
  price: number
  tags: string[]
  image: string
}

interface CartState {
  items: Coffee[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    default:
      return state
  }
}
