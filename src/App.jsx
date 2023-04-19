import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Register from "./pages/Register/Register"
import { createContext, useReducer } from "react"
import { authReducer, initialState } from "./store/authReducer"

export const AuthContext = createContext()

function App() {
  const [ state ,dispatch ] = useReducer(authReducer , initialState)
  return (
      <AuthContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </AuthContext.Provider>
  )
}

export default App