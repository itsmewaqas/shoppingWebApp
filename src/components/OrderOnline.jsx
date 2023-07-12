import React, { useState, useEffect, useCallback } from 'react';
import {
  useNavigate,
  Link
} from "react-router-dom";
import RestaurantListMenu from '../sharedComponents/RestaurantListMenu';
import LocationSelect from '../sharedComponents/LocationSelect';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Menu(props) {

  let navigate = useNavigate();

  const notify = () => toast.error("Please Select Branch", {
    position: "bottom-right",
    theme: "dark"
  });

  const [getLocation, SetgetLocation] = useState('');
  const [selectErr, SetselectErr] = useState(false);

  const [getid, Setgetid] = useState('');

  const selectLoction = (e, id) => {
    Setgetid(id);
    SetgetLocation(e.target.value);
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
      navigate('/OrderOnlineDetails', { state: dataFilter });
    }
  }

  useEffect(() => {
  }, []);

  return (
    <div>
      <ToastContainer />
      <div className='container clearfix'>
        <h3>Menu</h3>
        <div className='reservationListBlock'>
          <ul>
            {RestaurantListMenu.map((item, index) => (
              <li key={index.toString()}>
                <img src={item.picture} alt="" />
                <h1>{item.name}
                  <span><img src={require('../assets/img/star.png')} alt='' /> {item.rating}</span></h1>
                <LocationSelect
                  menuData={item.branches}
                  handleDropdown={(e) => selectLoction(e, item.id)} />
                <button onClick={() => goToRestaurantDetail(item)}>+</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;