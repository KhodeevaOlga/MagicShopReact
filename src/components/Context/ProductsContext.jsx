import React, { createContext, useState, useContext, useEffect } from 'react'
import lamps from '../../lamps';
import Axios from 'axios'

//Метод !
export const ProductsContext = createContext()

//Компонент ! с Provider
const ProductsContextProvider = ({children}) => {
  const [products, setProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState([])
  const [cart, setCart] = useState([])
  const [user, setUser] = useState('')

  const deleteCartItem = (id) => {
    console.log('_____________ id', id);
    const filteredCart = cart.filter(item => item._id !== id)
    console.log('_____________ filteredCart', filteredCart);
    setCart( filteredCart )
  }

// Приплюсовывание продуктов в корзине

  const cartItem = (productItem, value) => {
    const productPlus = cart.find(item => item.id === productItem.id)
    if (productPlus) {

      const countProduct = cart.map(item => {
       if (item.id === productItem.id) {
         item.value += value
       } return item
      })
      setCart(countProduct)

    } else {
      const cartProduct = products.find(item => item.id === productItem.id)
      cartProduct.value = value
      const newCart = [...cart, cartProduct]
      setCart(newCart)
    }


  }
  // Отправка токена для проверки и получения user
  // 1) Забраем значение из localStorage
  // 2) запрос на сервер для проверки токена
  // 3) после успешной проверки получить юзера и записать его в стэйт setUser (на бэке же)

  useEffect(() => {
    const sendToken = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const checkUser = await Axios.post('http://localhost:3010/users/token', '', { headers: { token } })

        setUser(checkUser.data)
      }
    }

    sendToken()
  }, [])

  useEffect(() => {
    const getAllProducts = async () => {
      await Axios.get('http://localhost:3010/products/all')
        .then((res) => {
          setProducts(res.data)
        })
        .catch((err)=> console.log('_____________ err', err))
    }
    getAllProducts()

    // запрос на сервер для загрузки lamps
    // сохранение в setProduct данных полученных с сервера

  }, [])

  const getOneProduct = async (id) => {
    // запрос одного продукта
    const product = await Axios.get(`http://localhost:3010/products/${id}`)
    setCurrentProduct(product.data);
  }


// Users регистрация для бэка
  const addNewUser = async (name, email, password) => {

    const createNewUser = {name: name, email: email, password: password}
    const newUser = await Axios.post('http://localhost:3010/users/register', createNewUser)
  }


  // Users регистрация для бэка
  const loginUser = async (email, password) => {

    const login = {email: email, password: password}
    const userLogin = await Axios.post('http://localhost:3010/users/login', login)

    localStorage.setItem('token', userLogin.data.token)
    setUser(userLogin.data)

  }

  return (
    <ProductsContext.Provider value={{
      cart,
      setCart,
      products,
      currentProduct,
      cartItem,
      deleteCartItem,
      getOneProduct,
      addNewUser,
      loginUser,
      user,
      setUser
    }}>

      {children}

    </ProductsContext.Provider>

  )
}

export default ProductsContextProvider;
