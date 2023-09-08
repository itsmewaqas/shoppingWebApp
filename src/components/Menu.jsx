import { type } from '@testing-library/user-event/dist/type';
import React, { useState, useEffect, useCallback, Fragment } from 'react';
import RestaurantList from '../sharedComponents/RestaurantList';
import ProductCart from '../sharedComponents/ProductCart';
import { connect, useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/Actions/index';
import Pagination from 'rc-pagination';

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

  // data filter
  //const filterProductList = RestaurantList.filter(x => x.itemType == 'future');

  // data get randomly
  // const RestaurantListRandom = RestaurantList.sort(() => Math.random() - Math.random()).slice(0, 5);


  const result = RestaurantList
    .map(item => ({
      ...item,
      menuList: item.menuList
        .filter(child => child.itemType == 'future'),
    }))




  const resultShowRandom = result.sort(() => Math.random() - Math.random()).slice(0, 2);
  console.log(resultShowRandom);


  const datavalue = [
    {
      id: 0,
      value: 70000,
      color: 'green'
    },
    {
      id: 1,
      value: 10000,
      color: 'red'
    },
    {
      id: 2,
      value: 10000,
      color: 'blue'
    },
    {
      id: 3,
      value: 10000,
      color: 'yellow'
    }
  ]

  console.log(data);

  useEffect(() => {
  }, []);

  return (
    <div>
      <div className='container'>
        <h3>Menu</h3>
      </div>
      <div className='container'>
        {/* <ProductCart
          data={RestaurantListRandom}
        /> */}



        <ul className='listbox'>
          {datavalue.map((item, index) => (
            <li key={index.toString()} style={{ backgroundColor: item.color, width: item.value / 100 }}>
              <span style={{visibility:'hidden'}}>{item.value / 100}</span>
            </li>
          ))}
        </ul>



        <ul>
          {resultShowRandom.map((item, index) => (
            <Fragment key={index.toString()}>
              {item.menuList.map((item, index) => (
                <li key={index.toString()}>
                  <img src={item.itemImg} alt="" />
                  <h1>{item.itemName} <span>Price ${item.itemPrice}</span></h1>
                  <p>{item.itemDescription}</p>
                  <p>{item.itemType}</p>
                  {/* <button className='addBtn2'
                    disabled={data.addtocart.cardData.some((x) => (x.id == item.id))}
                    onClick={() => addItem(item)}>Add To Cart</button> */}
                </li>
              ))}
            </Fragment>
          ))}
        </ul>




      </div>
    </div>
  );
}

export default Menu;