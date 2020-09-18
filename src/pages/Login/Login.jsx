import React, {useContext, useState} from 'react';
import Header from '../../components/Header/header';
import './index.css';
import Layout from '../../components/Layout/Layout';
import {ProductsContext} from '../../components/Context/ProductsContext';
import { useHistory } from "react-router-dom";


export const Login =()=>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {loginUser} = useContext(ProductsContext)
  const history = useHistory();

  const checkUser = () => {
    loginUser(email, password)

    // При логине пользователя откидывает на домашнюю стр
    history.push('/')
  }

  const handlerEmail = (e) => setEmail(e.target.value);
  const handlerPassword = (e) => setPassword(e.target.value)

  return (
      <Layout>

      <div className='sub-container'>
        <div className='heading'>
          <h1>Log in to your account</h1>
        </div>
      <div className="column-center">
      <div className="form-for-login">
        <label htmlFor="email">Email:</label>
        <input type="text" onChange={handlerEmail} id="email" name="email" value={email} placeholder="Your email..."/>
        <label htmlFor="password">Password:</label>
        <input type="password" onChange={handlerPassword} id="password" name="password" value={password} placeholder="Your password..."/>
        <input type="submit" value="Login" onClick={checkUser}/>
      </div>
      </div>
      </div>

      </Layout>



  )


};