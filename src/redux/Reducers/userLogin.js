
const intialState = {
    loginDetails: [],
    err: null,
};

const loginData = (state = intialState, action) => {
    switch (action.type) {

        case "USERLOGIN":
            return {
                ...state,
                loginDetails: action.payload[1],
                err: null
            }
        case "USERLOGINFAIL": return {
            ...state,
            loginDetails: null,
            err: action.err,
        }



        default: return state;
    }
}

export default loginData;



// https://firehydrant.com/blog/graceful-error-handling-with-redux/