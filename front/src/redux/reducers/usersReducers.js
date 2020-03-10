import { DESLOGUEO_USER, ALL_USER } from "../store/constants"
const initialUserState = {
    logged: {},
    allUsers: [],
    allOrder: []
}

export default function (state = initialUserState, action) {
    switch (action.type) {
        case "LOGGUE_USER":
            return { ...state, logged: action.user }
        case DESLOGUEO_USER:
            return { ...state, logged: {} }
        case ALL_USER:
            return { ...state, allUsers: action.allUser }
        case "ALL_ORDER":
            return { ...state, allOrder: action.allOrder }
        default:
            return state;
    }
}