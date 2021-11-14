import * as React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { setToken } from '../helpers/auth'
import { useNavigate } from 'react-router-dom'
import FormInput from '../components/FormInput'
import { getAxiosRequestConfig } from '../helpers/api'

const Login = ({ setIsLoggedIn }) => {
  const [data, setData] = useState({
    username: '',
    password: ''
  })

  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()

  // const handleSuccesfulLogin = ({ token }) => {
  //   setToken(token)
  //   setIsLoggedIn(true)
  //   setIsError(false)
  //   navigate('/home')
  // }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const config = getAxiosRequestConfig('/login', data)

    try {
      const response = await axios(config).catch(handleError)
      console.log(response.data.token)
      setToken(response.data.token)
      setIsLoggedIn(true)
      setIsError(false)
      navigate('/movies')
    } catch (err){
      console.error(err)
      setIsError(true)
    } 
  }

  
  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value
    })
  }
  
  const formInputProps = { data, errorInfo, handleFormChange }

  return (
    <section className="form-section">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Sign in to Burnt Toast</h1>
        <FormInput 
          placeholder="username" 
          type='text'
          name='username' 
          {...formInputProps} 
        />
        <FormInput 
          placeholder="password" 
          type='password'
          name='password' 
          {...formInputProps} 
        />
        <div>
          <input type="submit" value="Login" />
        </div>
        {isError ? (
          <div className='error'>
            <p>Error. Please try again.</p>
          </div> 
        ) : (
          <></>
        )}
      </form>
    </section>
  )
}

export default Login
