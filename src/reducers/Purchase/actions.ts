import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  INCREMENT_CART_ITEM = 'ADD_CART_NEW_ITEM',
  DECREMENT_CART_ITEM = 'DECREMENT_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  RESET_CART = 'RESET_CART',
}

export function addItemToCartAction(newItem: Coffee) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      newItem,
    },
  }
}

export function incrementCartItemAction(itemId: string) {
  return {
    type: ActionTypes.INCREMENT_CART_ITEM,
    payload: {
      itemId,
    },
  }
}

export function decrementCartItemAction(itemId: string) {
  return {
    type: ActionTypes.DECREMENT_CART_ITEM,
    payload: {
      itemId,
    },
  }
}

export function removeCartItemAction(itemId: string) {
  return {
    type: ActionTypes.REMOVE_CART_ITEM,
    payload: {
      itemId,
    },
  }
}

export function resetCartAction() {
  return {
    type: ActionTypes.RESET_CART,
  }
}
