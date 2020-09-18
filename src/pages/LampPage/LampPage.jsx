import React, {useContext, useEffect, useRef, useState} from 'react';
import Header from '../../components/Header/header';
import './index.css';
import {ProductsContext} from '../../components/Context/ProductsContext';

export const LampPage =(props)=>{
  const { currentProduct, cartItem, getOneProduct } = useContext(ProductsContext)
  const { image, name, price, info } = currentProduct;
  const [value, setValue] = useState(1)

  //Здесь хранится айдишник выбранного продукта
  const { current: itemId } = useRef(props.match.params.id)

  const addToCart = () => {
    cartItem(currentProduct, value)
  }

  useEffect(() => {
    getOneProduct(itemId);
  }, [itemId])
  console.log('_____________ 3333333333333', image);
  return (
    <>
      <Header/>
      <div className='price-name'>

        <div className='first-block'>
          <img className='good-img'
               // src={'http://localhost:3010/' + image}
               src={`http://localhost:3010/${image}`}
          />

          <div className="post-header">

            <h3>{name}</h3>
            <h4>${price}</h4>

            <div className='add-product'>
              <input defaultValue={value} onChange={event => setValue(event.target.value)} className='count-of-product' type="number"/>
              <button onClick={addToCart} className='button-for-add'>Add to Cart</button>
            </div>

          </div>
        </div>

        <div className='block-about-product'>
          <h3>About this magic product</h3>
          <p>{info}</p>
        </div>

      </div>
    </>
  )
};