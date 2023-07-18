
const intialState = {
    restaurantData: []
};

const selectRestaurant = (state = intialState, action) => {
    switch (action.type) {
        case "ADDRESTAURANT":
            return {
                ...state,
                restaurantData: [...state.restaurantData, action.payload]
            }
        case "REMOVERESTAURANT":
            return {
                ...state,
                restaurantData: state.restaurantData.filter(x => x.id !== action.id),
            }
        default: return state;
    }
}

export default selectRestaurant;


