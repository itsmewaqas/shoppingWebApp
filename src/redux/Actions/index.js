
export const addToCart = (data) => {
  return {
    type: 'ADDTOCART',
    payload: data,
  }
}

export const itemIncrement = (pItem) => {
  return {
    type: 'INCREMENT',
    payload: pItem,
  }
}

export const itemDecrement = (pItem) => {
  return {
    type: 'DECREMENT',
    payload: pItem,
  }
}

export const removeToCart = (id) => {
  return {
    type: 'REMOVETOCART',
    id,
  }
}

export const ordersuccess = () => {
  return {
    type: 'ORDERSUCCESS'
  }
}

