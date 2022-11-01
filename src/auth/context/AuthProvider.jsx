import { useReducer } from "react"
import { types } from "../components/types/types"
import { AuthContext } from "./AuthContex"
import { authReducer } from "./authReducer"
const initialState = {
    logged: false,
}

export const AuthProvider = ( { children } ) => {

    const [ authState, dispatch ] = useReducer( authReducer, initialState)

    const login = async ( name = ' ') => {
      const  action = {
        type: types.login,
        payload: {
          id: 'ABC',
          name: name
        }
      }
      dispatch( action )
    }


  return (
   <AuthContext.Provider value = {{
    ...authState,
    login: login
    }} >
    { children }
   </AuthContext.Provider>
  )
}
