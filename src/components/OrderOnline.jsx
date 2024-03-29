import React, { useState, useEffect, useCallback } from 'react';
import {
  useNavigate,
  Link
} from "react-router-dom";
import RestaurantList from '../sharedComponents/RestaurantList';
import LocationSelect from '../sharedComponents/LocationSelect';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect, useSelector, useDispatch } from 'react-redux';
import { addToRestaurant, removeoRestaurant } from '../redux/Actions/index';

function Menu(props) {

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state
  });

  const notify = () => toast.error("Please Select Branch", {
    position: "bottom-right",
    theme: "dark"
  });

  const [getLocation, SetgetLocation] = useState('');
  const [selectErr, SetselectErr] = useState(false);
  const [getid, Setgetid] = useState('');

  const selectLoction = (e, id) => {
    if (e.target.value == "Select") {
      notify()
    }
    else {
      Setgetid(id);
      SetgetLocation(e.target.value);
    }
  };

  const goToRestaurantDetail = (item) => {
    if (getLocation == '' || item.id != getid) {
      SetselectErr({ selectErr: true });
      notify()
    }
    else {
      const filterBranch = item.branches.filter((x) => x == getLocation);
      const dataFilter = {
        id: item.id,
        category: item.category,
        name: item.name,
        branches: filterBranch == '' ? item.branches : filterBranch,
        picture: item.picture,
        rating: item.rating,
        menuList: item.menuList,
      }
      dispatch(addToRestaurant(
        dataFilter
      ))
      navigate('/OrderOnlineDetails', { state: dataFilter });
    }
  }

  const goToSelectedMenu = (item) => {
    navigate('/OrderOnlineDetails', { state: item });
  }

  const cancelRes = (item) => {
    dispatch(removeoRestaurant(
      item.id
    ))
  }

  useEffect(() => {
  }, []);


  return (
    <div>
      <ToastContainer />
      <div className='container clearfix'>
        <h3>Select Restaurant</h3>
        <div className='reservationListBlock' style={{ marginTop: '50px' }}>
          <ul>
            {RestaurantList.map((item, index) => ( 
              <li key={index.toString()}>
                <img src={item.picture} alt="" />
                <h1>{item.name}
                  <span><img src={require('../assets/img/star2.png')} alt='' /> {item.rating}</span></h1>
                <LocationSelect
                  menuData={item.branches}
                  handleDropdown={(e) => selectLoction(e, item.id)} />
                {data.addRestaurant.restaurantData.some((x) => (x.id == item.id)) ?
                  <button
                    className='editBtn'
                    disabled={
                      data.addRestaurant.restaurantData.length == 0 ? true :
                        data.addtocart.cardData.length == 0 ? true :
                          data.addRestaurant.restaurantData.some((x) => (x.id !== item.id))
                    }
                    onClick={() => goToSelectedMenu(item)}>
                    <img src={require('../assets/img/basket.png')} title='Edit' alt="" />
                  </button>
                  :
                  <button
                    className='addBtn'
                    disabled={data.addRestaurant.restaurantData.some((x) => (x.id !== item.id))}
                    onClick={() => goToRestaurantDetail(item)}>
                    <img src={require('../assets/img/add.png')} title='Add' alt="" />
                  </button>
                }
                {data.addRestaurant.restaurantData.some((x) => (x.id == item.id)) ?
                  <button
                    disabled={
                      data.addtocart.cardData.length > 0 ? true : false}
                    className='cancelBtn' onClick={() => cancelRes(item)}>
                    <img src={require('../assets/img/reset.png')} title='Reset' alt="" />
                  </button>
                  : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div >
  );
}




export default Menu;