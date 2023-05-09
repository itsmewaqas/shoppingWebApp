import { type } from '@testing-library/user-event/dist/type';
import React, { useState, useEffect } from 'react';
import productList from '../sharedComponents/ProductList';

function ShoppingCart(props) {

  const [productItem, SetproductItem] = useState([]);

  // data get randomly 
  // const finalData = productList.sort(() => Math.random() - Math.random());

  const addItem = (item) => {
    SetproductItem(productItem => [...productItem, item]);
  }

  const removeItem = (id) => {
    const newList = productItem.filter((item) => item.id !== id);
    SetproductItem(newList);
  }

  let sum = productItem.reduce(function (prev, current) {
    return prev + +current.productPrice
  }, 0);

  useEffect(() => {
  }, [productItem]);


  useEffect(() => {
  }, []);

  return (
    <div>
      <div className='container'>
        <h3>Menu</h3>
      </div>
      <div className='container'>
        <ul className='productList'>
          {productList?.map((item, index) => (
            <li key={index.toString()}>
              <img src={item.productImg} alt="" />
              <h3>{item.productTitle}
                <span>${item.productPrice}</span></h3>
              <p>{item.productDescription}</p>
              <button onClick={() => addItem(item)}>Order a delivery
                <img src={require('../assets/img/fast-delivery.png')} alt="" />
              </button>
            </li>
          ))}
        </ul>
        {productItem.length == 0 ? null :
          <div className='card'>
            <ul>
              {productItem.length >= 0 ?
                productItem?.map((pItem, index) => (
                  <li key={index.toString()}>
                    <img src={pItem.productImg} alt="" />
                    <p>{pItem.productTitle}
                      <span>Price: ${pItem.productPrice}</span></p>
                    <button onClick={() => removeItem(pItem.id)}>X</button>
                  </li>
                ))
                : <p>Card is Empty</p>
              }
            </ul>
            <dd>Total Amount :${sum}</dd>
          </div>}
      </div>
    </div>
  );
}
export default ShoppingCart;

// this is card style 
// .card{
//   position: fixed;
//   right: 0px;
//   top: 100px;
//   width: 300px;
//   height: 300px;
//   overflow-y: scroll;
//   background-color: #ccc;
// }
// .card ul{
//   margin: 0px;
//   padding: 15px;
//   box-sizing: border-box;
//   list-style: none;
//   display: block;
// }
// .card ul li{
//   margin: 0px 0px 10px;
//   padding: 10px;
//   box-sizing: border-box;
//   display: block;
//   background-color: #fff;
//   clear: both;
//   overflow: auto;
// }
// .card ul li img{
//  float: left;
//  width: 50px;
//  height: 50px;
// }
// .card ul li p{
//   float: left;
//   font-size: 14px;
//   line-height: 18px;
//   color: #000;
//   padding: 5px;
//   box-sizing: border-box;
//  }
//  .card ul li p span{
//   font-size: 12px;
//   line-height: 16px;
//   display: block;
//  }
//  .card ul li button{
//   float: right;
//   border: none;
//   background-color: transparent;
//   font-size: 16px;
//   line-height: 16px;
//   margin-top: 15px;
//   cursor: pointer;
//  }