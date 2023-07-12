import React, { useState, useEffect, useCallback } from 'react';
import RestaurantListMenu from '../sharedComponents/RestaurantListMenu';
import { useLocation } from "react-router-dom";
import { connect, useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/Actions/index';

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

  const [filterMenu, SetfilterMenu] = useState([]);
  useEffect(() => {
    const filterMenuList = RestaurantListMenu.filter((x) => {
      return x.id == itemDetail.id;
    })
    SetfilterMenu(filterMenuList);
  }, []);

  return (
    <div>
      <div className='container clearfix'>
        <h3>Menu</h3>
        {filterMenu.length == 0 ?
          <div>data not found</div>
          :
          <div>
            <h1>fetch menu list</h1>
            {filterMenu.map((item, index) => (
              <div key={index.toString()}>
                {item.menuList.map((child, index) => (
                  <div key={index.toString()}>
                    <img src={child.itemImg} alt="" />
                    <p>{child.itemName}</p>
                    <p>${child.itemPrice}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
}

export default OrderOnlineDetails;