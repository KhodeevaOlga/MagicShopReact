import React from 'react';
import Header from '../../components/Header/header';
import './index.css';


export const Admin =()=>{


  return (
    <div>
    <Header/>
    <div className='admin-block'>
      <table className="table table-hover">
        <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Amount</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td></td>
          <td>Goblet of Fire</td>
          <td>$100</td>
          <td>5</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td></td>
          <td>Marauder's Map</td>
          <td>$150</td>
          <td>9</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td></td>
          <td>Chocolate Frogs</td>
          <td>$30</td>
          <td>150</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td></td>
          <td>Felix Felicis</td>
          <td>$300</td>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td></td>
          <td>Advanced Potion-Making</td>
          <td>$220</td>
          <td>50</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td></td>
          <td>Golden Snitch</td>
          <td>$130</td>
          <td>30</td>
        </tr>
        </tbody>
      </table>
    </div>
    </div>


  )
};