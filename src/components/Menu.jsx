import { type } from '@testing-library/user-event/dist/type';
import React, { useState, useEffect, useCallback } from 'react';
import productList from '../sharedComponents/ProductList';
import ProductCart from '../sharedComponents/ProductCart';
import { connect, useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/Actions/index';

function Menu(props) {

  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state
  });

  const [productItem, SetproductItem] = useState([]);

  const addItem = (item) => {
    SetproductItem(item => [...item]);
    dispatch(addToCart(
      item
    ))
  }

  useEffect(() => {
  }, []);

  return (
    <div>
      <div className='container'>
        <h3>Menu</h3>
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

export default Menu;