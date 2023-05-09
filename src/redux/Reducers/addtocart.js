
const intialState = {
    cardData: []
};

const cardItems = (state = intialState, action) => {
    switch (action.type) {
        case "ADDTOCART": 
            return {
                ...state,
                cardData: addItemToCart(state.cardData, action.payload),
            }

        case "INCREMENT":
            return {
                ...state,
                cardData: AddExistingItemToCart(state.cardData, action.payload),
            }

        case "DECREMENT":
            return {
                ...state,
                cardData: RemoveExistingItemFromCart(state.cardData, action.payload)
            }

        case "REMOVETOCART":
            return Object.assign({}, state, {
                cardData: [...state.cardData.filter(item => item.id !== action.id)],
            });
        case "ORDERSUCCESS": return {
            ...state,
            cardData: []
        }
        default: return state;
    }
}

const AddExistingItemToCart = ((cardData, itemToAdd) => {
    return cardData.map(item =>
        item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    )
}); 

const RemoveExistingItemFromCart = ((cardData, itemToRemove) => {
    const existingItem = cardData.find(item => item.id === itemToRemove.id);
    console.log(existingItem);
    let newItem = [];
    if (existingItem.quantity <= 1) {
        newItem = cardData.filter((item) => (item.id !== existingItem.id))
    }
    else {
        newItem = cardData.map(item =>
            item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
        )
    }
    return newItem;
});

const addItemToCart = ((cardData, itemToAdd) => {
    const existingItem = cardData.find(item => item.id === itemToAdd.id);
    if (existingItem) {
        return cardData.map(item =>
            item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        )
    }
    else {
        return [...cardData, { ...itemToAdd, quantity: 1 }]
    }
});

export default cardItems;

