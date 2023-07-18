import React, { useState, useEffect, useCallback, Fragment } from 'react';
import RestaurantList from '../sharedComponents/RestaurantList';
import { useLocation } from "react-router-dom";
import { connect, useSelector, useDispatch } from 'react-redux';
import { addToCart, itemIncrement, itemDecrement } from '../redux/Actions/index';

function OrderOnlineDetails(props) {

  const location = useLocation();
  const itemDetail = location.state;

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

  const addExistingItem = (item) => {
    console.log('call addExistingItem', item);
    dispatch(itemIncrement(
      item
    ))
  }

  const removeExistingItem = (item) => {
    console.log('call removeExistingItem', item);
    dispatch(itemDecrement(
      item
    ))
  }

  const [filterMenu, SetfilterMenu] = useState([]);
  useEffect(() => {
    const filterMenuList = RestaurantList.filter((x) => {
      return x.id == itemDetail.id;
    })
    SetfilterMenu(filterMenuList);
  }, []);

  return (
    <div>
      <div className='container clearfix'>
        <h3>{itemDetail.name}</h3>

        <div className='reservationListBlock' style={{ marginTop: '50px' }}>
          <ul>
            {filterMenu.map((item, index) => (
              <Fragment key={index.toString()}>
                {item.menuList.map((item, index) => (
                  <li key={index.toString()}>
                    <img src={item.itemImg} alt="" />
                    <h1>{item.itemName} <span>${item.itemPrice}</span></h1>
                    {data.addtocart.cardData.filter(x => x.id == item.id).map(em => (
                      <div className='qtyCtrl'>
                        <button className='miniBtn' onClick={() => removeExistingItem(item)}>-</button>
                        <p> Qty: {em.quantity}</p>
                        <button className='miniBtn' onClick={() => addExistingItem(item)}>+</button>
                      </div>
                    ))}
                    <button className='btn2'
                      disabled={data.addtocart.cardData.some((x) => (x.id == item.id))}
                      onClick={() => addItem(item)}>Add To Cart</button>
                  </li>
                ))}
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrderOnlineDetails;