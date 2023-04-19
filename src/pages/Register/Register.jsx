import React, { useContext, useEffect, useReducer } from 'react'
import './Register.scss'
import { AuthContext } from '../../App'
import { useNavigate } from 'react-router-dom'
const Register = () => {

  const {state , dispatch}=useContext(AuthContext)
const navigate = useNavigate()
useEffect(() => {

  if (state.isLogged) {
    navigate('/', { replace: true})
  }
}, [])

 return (
    <div className='auth-container'>
      <form className='auth-form'>
        <h1>Register</h1>
        <input type='text' placeholder='Enter your name' required/>
        <input type='text' placeholder='Enter phone number' required/>
        <input type='password' placeholder='Enter password' required/>
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register