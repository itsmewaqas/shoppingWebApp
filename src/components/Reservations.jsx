import { type } from '@testing-library/user-event/dist/type';
import React, { useState, useEffect } from 'react';
import {
  useNavigate,
  Link
} from "react-router-dom";
import RestaurantList from '../sharedComponents/RestaurantList';
import LocationSelect from '../sharedComponents/LocationSelect';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OrderOnline(props) {

  let navigate = useNavigate();

  const [chooseCategory, SetchooseCategory] = useState('All');
  const [datalist, Setdatalist] = useState(RestaurantList);
  const [search, Setsearch] = useState('');

  const notify = () => toast.error("Please Select Branch", {
    position: "bottom-right",
    theme: "dark"
  });

  const selectedCategory = (chooseCategory) => {
    SetchooseCategory(chooseCategory);
    if (chooseCategory == "All") {
      Setdatalist(RestaurantList);
      return;
    }
    const filteredData = RestaurantList.filter((x) => {
      return x.category == chooseCategory;
    })
    Setdatalist(filteredData);
  }

  const searchItems = (searchValue) => {
    Setsearch(searchValue)
    if (search !== '') {
      const filteredData = RestaurantList.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())
      })
      Setdatalist(filteredData)
    }
    else {
      Setdatalist(RestaurantList)
    }
  }

  function selectCategory(event) {
    if (event.target.value == "All") {
      Setdatalist(RestaurantList);
    }
    else {
      const filteredData = RestaurantList.filter((x) => {
        return x.category == event.target.value;
      })
      Setdatalist(filteredData);
    }
  }

  const getCategory = ['All', ...new Set(RestaurantList.map(x => x.category))];
  console.log('getCategory', getCategory);

  const [getLocation, SetgetLocation] = useState('');
  const [selectErr, SetselectErr] = useState(false);

  const [getid, Setgetid] = useState('');

  const selectLoction = (e, id) => {
    Setgetid(id); 
    SetgetLocation(e.target.value);
  };

  const goToReserved = (em) => {
    if (getLocation == '' || em.id != getid) {
      SetselectErr({ selectErr: true });
      notify()
    }
    else {
      const filterBranch = em.branches.filter((x) => x == getLocation);
      const dataFilter = {
        category: em.category,
        name: em.name,
        branches: filterBranch == '' ? em.branches : filterBranch,
        picture: em.picture,
        rating: em.rating,
      }
      navigate('/ReservationsDetails', { state: dataFilter });
    }
  }

  const renderIcon = (icon) => {
    switch (icon) {
      case "All":
        return require('../assets/img/icons/All.png');
      case "Cafe":
        return require('../assets/img/icons/Cafe.png');
      case "Pizza":
        return require('../assets/img/icons/Pizza.png');
      case "FastFood":
        return require('../assets/img/icons/FastFood.png');
      case "Buffet":
        return require('../assets/img/icons/Buffet.png');
      case "BarBq":
        return require('../assets/img/icons/BarBq.png');
      case "Chinese":
        return require('../assets/img/icons/Chinese.png');
      case "DesiFood":
        return require('../assets/img/icons/DesiFood.png');
      case "Burgers":
        return require('../assets/img/icons/Burgers.png');
      case "Steakhouses":
        return require('../assets/img/icons/Steakhouses.png');
      case "Icecream":
        return require('../assets/img/icons/Icecream.png');
      default:
        return require('../assets/img/icons/All.png');
    }
  }

  useEffect(() => {
  }, [])

  return (
    <div>
      <ToastContainer />
      <div className='container'>
        <h3>Reservation</h3>
      </div>
      <div className='container clearfix'>
        <div className='reservationFilterBlock'>
          <div className='filterLeft'>
            <label>Filter:</label>
            <select onChange={selectCategory}>
              {getCategory.map((item, index) => {
                return (
                  <option key={index.toString()} value={item}>{item}</option>
                )
              })}
            </select>
          </div>
          <div className='fiterRight'>
            <label>Search:</label>
            <input placeholder='Search' onChange={(e) => searchItems(e.target.value)} />
          </div>
          <div>
            <ul>
              {getCategory.map((item, index) => {
                return (<li key={index.toString()}>
                  <a className={chooseCategory === item ? 'tabActive' : 'tabClick'}
                    onClick={() => selectedCategory(item)}>
                    <img src={renderIcon(item)} alt="" />
                    {item}</a>
                </li>)
              })}
            </ul>
          </div>
        </div>
        <div className='reservationListBlock'>
          <ul>
            {datalist.map((em, index) => (
              <li key={index.toString()}>
                <img src={em.picture} alt="" />
                <h1>{em.name}
                  <span><img src={require('../assets/img/star.png')} alt='' /> {em.rating}</span></h1>
                <LocationSelect
                  menuData={em.branches}
                  handleDropdown={(e) => selectLoction(e, em.id)} />
                <button onClick={() => goToReserved(em)}>+</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrderOnline;



// https://www.heroku.com/
// https://www.gatsbyjs.com/
// https://vercel.com/solutions/nextjs