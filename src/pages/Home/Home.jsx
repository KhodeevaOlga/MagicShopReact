import React, {useContext} from 'react';
import './index.css';
import {ListItem} from '../../components/ListItem/ListItem';
// import lamps from '../../lamps'
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import {ProductsContext} from '../../components/Context/ProductsContext';
// import IMG2 from './Assets/HutWiz.jpg'

// console.log(lamps);
export const Home = (props) => {

  const { products } = useContext(ProductsContext)

  return (
    <Layout>
      <div>
        <li className="title">
          Magic
          <img
            src="https://www.vettorialigratis.it/wp-content/uploads/2010/05/cappello-da-mago-magician-hat.jpg"
            alt=""
          />
          Shop
        </li>
        <div className='shop-container'>
          <div className='container-product'>
            {products.map(({name,image, price, _id}) => {
              return (
                <Link key={_id} to={'/products/' + _id}>
                  <ListItem name={name}
                            image={'http://localhost:3010/' + image}
                            price={price}
                            id={_id}
                  />
                </Link>

              );
            })
            }
          </div>
        </div>

      </div>
    </Layout>
  )
}
