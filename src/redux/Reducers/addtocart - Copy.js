
const intialState = {
    cardData: []
};

const cardItems = (state = intialState, action) => {
    switch (action.type) {
        case "ADDTOCART":
            return {
                ...state,
                cardData: addItemToCart(state.cardData, action.payload),
                // total:action.payload.quantity * action.payload.productPrice
                // ...state.quantity += 1,
                // ...state.cardData = state.cardData.filter(el => el._id !== action.payload),
                // ...state.total += action.payload.productPrice * action.payload.quantity,
            }
        // return {
        //     ...state,
        //     cardData: [...state.cardData, action.payload],
        // }

        // if (action.type == "INCREMENT") {
        //     let updatedCart = state.item.map((cItem) => {
        //         if (cItem.id == action.payload) {
        //             return { ...cItem, quantity: cItem.quantity + 1 }
        //         }
        //         return cItem;
        //     })
        //     return { ...state, item: updatedCart };
        // }


        case "INCREMENT":
            return {
                ...state,
                cardData: AddExistingItemToCart(state.cardData, action.payload),
            }
        // return {
        //     ...state,
        //     cardData: state.cardData.map((cItem) => {
        //         if (cItem.id == action.payload) {
        //             return { ...cItem, quantity: cItem.quantity + 1 }
        //         }
        //         return cItem;
        //     })
        // }


        case "DECREMENT":
            return {
                ...state,
                cardData: RemoveExistingItemFromCart(state.cardData, action.payload)
            }
        // return {
        //     ...state,
        //     cardData: state.cardData.map((cItem) => {
        //         if (cItem.id == action.payload) {
        //             return { ...cItem, quantity: cItem.quantity - 1 }
        //         }
        //         return cItem;
        //     })
        // }



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

