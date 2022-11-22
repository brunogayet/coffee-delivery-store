import { ActionTypes } from './actions'

export interface Coffee {
  id: string
  title: string
  price: number
  image: string
  qty: number
  subtotal?: number
}

interface PayloadProps {
  newItem?: Coffee
  itemId?: string
}

interface ActionProps {
  type: ActionTypes
  payload?: PayloadProps
}

interface CartState {
  cart: Coffee[]
}

export function purchaseReducer(state: CartState, action: ActionProps) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      const { id, title, price, image, qty }: Coffee = action.payload?.newItem!

      const itemExistsInCart = state.cart.find((item) => item.id === id)

      if (itemExistsInCart) {
        const cartWithItemIncremented = state.cart.map((item) =>
          item.id === id
            ? {
                ...item,
                qty: item.qty + qty,
                subtotal: Number(((item.qty + qty) * item.price).toFixed(2)),
              }
            : item,
        )

        return {
          ...state,
          cart: cartWithItemIncremented,
        }
      }

      const firstItemInCart = [
        ...state.cart,
        {
          id,
          title,
          price,
          image,
          qty,
          subtotal: Number((qty * price).toFixed(2)),
        },
      ]

      return {
        ...state,
        cart: firstItemInCart,
      }
    }

    case ActionTypes.INCREMENT_CART_ITEM: {
      const itemId = action.payload?.itemId

      const cartWithItemIncremented = state.cart.map((item) =>
        item.id === itemId
          ? {
              ...item,
              qty: item.qty + 1,
              subtotal: Number(((item.qty + 1) * item.price).toFixed(2)),
            }
          : item,
      )

      return {
        ...state,
        cart: cartWithItemIncremented,
      }
    }

    case ActionTypes.DECREMENT_CART_ITEM: {
      const itemId = action.payload?.itemId

      const itemInCart = state.cart.find((item) => item.id === itemId)

      if (itemInCart!.qty > 1) {
        const cartWithItemDecremented = state.cart.map((item) =>
          item.id === itemId
            ? {
                ...item,
                qty: item.qty - 1,
                subtotal: Number(((item.qty - 1) * item.price).toFixed(2)),
              }
            : item,
        )

        return {
          ...state,
          cart: cartWithItemDecremented,
        }
      } else {
        const cartWithItemRemoved = state.cart.filter(
          (item) => item.id !== itemId,
        )

        return {
          ...state,
          cart: cartWithItemRemoved,
        }
      }
    }

    case ActionTypes.REMOVE_CART_ITEM: {
      const itemId = action.payload?.itemId

      const cartWithItemRemoved = state.cart.filter(
        (item) => item.id !== itemId,
      )

      return {
        ...state,
        cart: cartWithItemRemoved,
      }
    }

    case ActionTypes.RESET_CART: {
      return {
        cart: [],
      }
    }

    default:
      return state
  }
}
