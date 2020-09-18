import React, {useContext} from 'react';
import Header from '../../components/Header/header';
import './index.css';
import Layout from '../../components/Layout/Layout';

import {ProductsContext} from '../../components/Context/ProductsContext';
import {Link} from 'react-router-dom';
import {ListItem} from '../../components/ListItem/ListItem';
import {CartItem} from '../../components/CartItem/cartItem';


export const Cart =()=>{

  const { cart } = useContext(ProductsContext)

  return (
    <Layout>
      <div className='container-product'>
        {cart.map(({name,image, price, _id, value, info}) => {
          return (
              <CartItem name={name}
                        image={'http://localhost:3010/' + image}
                        price={price}
                        id={_id}
                        value={value}
                        info={info}
              />

          );
        })
        }
      </div>
      <div className="cart-price">

        <p className='total-sum'>Sub total:
          $0</p>

        <input type="button" value='Check out'/>
      </div>
    </Layout>
  )
};