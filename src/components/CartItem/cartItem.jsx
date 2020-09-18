import React, {useContext} from 'react';
import './index.css'
import {Link} from 'react-router-dom';
import {ProductsContext} from '../Context/ProductsContext';


/*function CartDeleteProduct(props) {
  const {deleteButton} = props;
}*/
/*const CartItem = () => {
const [tasks, setTasks] = useState([]);


}*/



export const CartItem =({ id, name, price, image, info, value }) => {
  const { deleteCartItem } = useContext(ProductsContext)

  // const _deleteButton = () => {
  //   deleteButton(event)
  // }

  const deleteButton = () => {
    deleteCartItem(id)
  }


    return (
    <div className='inside-cart'>
      {/*<Link key={id} to={'/products/' + id}/>*/}
      <div className='shopping-list'>
        <img className='image-cart' src={image}
         />
      </div>

      <div className='wizard-list'>
        <Link key={id} to={'/products/' + id}><h3 className='head-cart'>{name}</h3></Link>
        <h5 className='inform-ab-price'>{value} x ${price}</h5>
        <p>{info}</p>
      </div>

      {/*Удаления кнопка*/}

      <div className="button-clear">
        <button type="button" className='delete-button' onClick={deleteButton} >×</button>
      </div>


    </div>)
}