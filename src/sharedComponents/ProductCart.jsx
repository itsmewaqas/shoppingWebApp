import React, { useState, useEffect } from 'react';
import productList from '../sharedComponents/ProductList';
import { connect, useSelector, useDispatch } from 'react-redux';

function ProductCart(props) {

  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state
  });

  useEffect(() => {
  }, [])

  return (
    <div>
      <ul className='productList'>
        {props.data?.map((item, index) => (
          <li key={index.toString()}>
            <img src={item.productImg} alt="" />
            <h3>{item.productTitle}<span>${item.productPrice}</span></h3>
            <p>{item.productDescription}</p>
            {/* {props.visibilityCtrl && <div></div>} */}
            <button
              disabled={data.addtocart.cardData.some((x) => (x.id == item.id))}
              onClick={() => props.addToCart(item)}>Order a delivery
              <img src={require('../assets/img/fast-delivery.png')} alt="" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCart;