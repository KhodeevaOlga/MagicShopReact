import React, {useState, useContext} from 'react';
import Header from '../../components/Header/header';
import Layout from '../../components/Layout/Layout';
import {ProductsContext} from '../../components/Context/ProductsContext';

export const Registration =()=>{

  const {addNewUser} = useContext(ProductsContext)

  const [nameRegister, setNameRegister] = useState('')
  const [emailRegister, setEmailRegister] = useState('')
  const [password, setPassword] = useState('')

  const addUser = () => {
    addNewUser(nameRegister, emailRegister, password)
  }


  const handlerNameRegister = (e) => setNameRegister(e.target.value);
  const handlerEmailRegister= (e) => setEmailRegister(e.target.value)
  const handlerPassword = (e) => setPassword(e.target.value)

  return (

<Layout>
      <div className='sub-container'>
        <div className='heading'>
          <h1>Create an account</h1>
        </div>
        <div className="column-center">
          <div className="form-for-login">
            <label htmlFor="name">Name:</label><br/>
            <input type="text" onChange={handlerNameRegister} id="name" name="name" value={nameRegister} placeholder="Your name..."/><br/>
            <label htmlFor="lname">Email:</label><br/>
            <input type="text" onChange={handlerEmailRegister} id="lname" name="lname" value={emailRegister} placeholder="Your last name..."/> <br/>
            <label htmlFor="name">Password:</label><br/>
            <input type="password" onChange={handlerPassword} id="name" name="name" value={password} placeholder="Password..."/><br/>
            <input type="submit" value="Register" onClick={addUser}/>
          </div>
        </div>
      </div>


</Layout>

  )


};