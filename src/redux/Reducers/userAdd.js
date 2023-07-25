
const intialState = {
    userData: [],
};

const userAdded = (state = intialState, action) => {
    switch (action.type) {
        case "ADDUSER":
            return {
                ...state,
                userData: [...state.userData, action.payload]
            }
        // case "REMOVERESTAURANT":
        //     return {
        //         ...state,
        //         restaurantData: state.restaurantData.filter(x => x.id !== action.id),
        //     }
        // case "ORDERSUCCESS": return {
        //     ...state,
        //     restaurantData: []
        // }
        default: return state;
    }
}

export default userAdded;


