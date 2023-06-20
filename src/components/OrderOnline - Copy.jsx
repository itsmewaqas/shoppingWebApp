import { type } from '@testing-library/user-event/dist/type';
import React, { useState, useEffect } from 'react';
import productList from '../sharedComponents/ProductList';
import ProductCart from '../sharedComponents/ProductCart';
import { connect, useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/Actions/index';

function OrderOnline(props) {

  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state
  });

  // data get randomly
  // const finalData = productList.sort(() => Math.random() - Math.random());

  const [productItem, SetproductItem] = useState([]);

  const addItem = (item) => {
    SetproductItem(productItem => [...productItem, item]);
    dispatch(addToCart(
      item
    ))
  }

  useEffect(() => {
  }, [])

  return (
    <div>
      <div className='container'>
        <h3>Order Online</h3>
      </div>
      <div className='container'>
        <ProductCart
          data={productList}
          addToCart={(item) => addItem(item)}
        />
      </div>
    </div>
  );
}

export default OrderOnline;