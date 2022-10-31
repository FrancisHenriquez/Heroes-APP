import { types } from "../components/types/types"

export const authReducer = ( state = {}, action ) => {

    switch ( action.type ){
        case types.log:
            return {
                ...state,
                logged: true,
                name: action.payload,
            };
        case type.logout:
            return {
                logged: false,
               
            };
        
        default:
            return state;
    }

}