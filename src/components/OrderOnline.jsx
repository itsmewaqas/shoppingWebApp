import { type } from '@testing-library/user-event/dist/type';
import React, { useState, useEffect } from 'react';
import {
  useNavigate,
  Link
} from "react-router-dom";
import RestaurantList from '../sharedComponents/RestaurantList';

function OrderOnline(props) {

  let navigate = useNavigate();

  var restaurantsList = [
    {
      id: 0,
      category: 'Cafe',
      name: "Cheesecake Factory",
      location: "Karachi East",
      restaurantPic: require('../assets/img/sweetdish.jpg'),
    },
    {
      id: 1,
      category: 'Fastfood',
      name: "Shokolaat",
      location: "Karachi West",
      restaurantPic: require('../assets/img/burger.jpg'),
    },
    {
      id: 2,
      category: 'Casualdining',
      name: "Gordon Biersch",
      location: "Karachi South",
      restaurantPic: require('../assets/img/herroBanner.jpg'),
    },
    {
      id: 3,
      category: 'Steakhouse',
      name: "Crepevine",
      location: "Karachi Central",
      restaurantPic: require('../assets/img/friedChicken.jpg'),
    },
    {
      id: 4,
      category: 'Cafe',
      name: "Creamery",
      location: "Karachi East",
      restaurantPic: require('../assets/img/coffee.jpg'),
    },
    {
      id: 5,
      category: 'Fastfood',
      name: "La Strada",
      location: "Karachi West",
      restaurantPic: require('../assets/img/pizza.jpg'),
    },
    {
      id: 6,
      category: 'Casualdining',
      name: "Bistro Maxine",
      location: "Karachi South",
      restaurantPic: require('../assets/img/biryani.jpg'),
    },
    {
      id: 7,
      category: 'Steakhouse',
      name: "Three Seasons",
      location: "Karachi Central",
      restaurantPic: require('../assets/img/pasta.jpg'),
    },
    {
      id: 8,
      category: 'Cafe',
      name: "Siam Royal",
      location: "Karachi East",
      restaurantPic: require('../assets/img/tea.jpg'),
    },
    {
      id: 9,
      category: 'Fastfood',
      name: "Thaiphoon",
      location: "Karachi West",
      restaurantPic: require('../assets/img/chinese.jpg'),
    },
    {
      id: 10,
      category: 'Casualdining',
      name: "Gyros-Gyros",
      location: "Karachi South",
      restaurantPic: require('../assets/img/pasta.jpg'),
    },
    {
      id: 11,
      category: 'Steakhouse',
      name: "Mandarin Gourmet",
      location: "Karachi Central",
      restaurantPic: require('../assets/img/biryani.jpg'),
    },
  ]

  const [chooseCategory, SetchooseCategory] = useState('All');
  const [datalist, Setdatalist] = useState(RestaurantList);
  const [search, Setsearch] = useState('');

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

  const selectLoction = (e) => {
    SetgetLocation(e.target.value);
  };

  const goToReserved = (em) => {
    const filterBranch = em.branches.filter((x) => x == getLocation);
    const dataFilter = {
      category: em.category,
      name: em.name,
      branches: filterBranch == '' ? em.branches : filterBranch,
      picture: em.picture,
      rating: em.rating,
    }
    navigate('/Reservations', { state: dataFilter });
  }

  useEffect(() => {
  }, [])

  return (
    <div>
      <div className='container'>
        <h3>Reservation</h3>
      </div>
      <div className='container clearfix'>

        <div className='reservationFilterBlock'>
          <div>
            <label>Filter:</label>
            <select onChange={selectCategory}>
              {getCategory.map((item, index) => {
                return (
                  <option key={index.toString()} value={item}>{item}</option>
                )
              })}
            </select>
          </div>
          <div>
            <label>Search:</label>
            <input placeholder='Search' onChange={(e) => searchItems(e.target.value)} />
          </div>
          <div>
            <ul>
              {getCategory.map((item, index) => {
                return (<li key={index.toString()}>
                  <a className={chooseCategory === item ? 'tabActive' : 'tabClick'}
                    onClick={() => selectedCategory(item)}>{item}</a>
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
                {/* <p>{em.branches.join(', ')}</p> */}
                <p>{em.branches.length == 1 ?
                  <p>{em.branches}</p>
                  :
                  <div>
                    <label>Select Branch</label>
                    <select onChange={selectLoction}>
                      <option>Select</option>
                      {em.branches.map((item, index) => {
                        return (
                          <option key={index.toString()} value={item}>{item}</option>
                        )
                      })}
                    </select>
                  </div>}
                </p>


                <button
                  disabled={em.branches.length > 1 ? true : false} 
                  onClick={() => goToReserved(em)}>Go To Reserved</button>

                {/* {em.branches.length > 1 ?
                  <button
                    disabled={RestaurantList.some((x) => (x.id == em.id))}
                    onClick={() => goToReserved(em)}>Go To Reserved</button>
                  :
                  <button onClick={() => goToReserved(em)}>Go To Reserved</button>
                } */}


                {/* <button
                  disabled={RestaurantList.some((x) => (x.id == em.id)) && em.branches.length > 1}
                  onClick={() => goToReserved(em)}>Go To Reserved</button> */}

                {/* <button onClick={() => goToReserved(em)}>Go To Reserved</button> */}
              </li>
            ))}
          </ul>
        </div>








        {/* <div>
          <select onChange={selectCategory}>
            {getCategory.map((item, index) => {
              return (
                <option key={index.toString()} value={item}>{item}</option>
              )
            })}
          </select>
        </div>
        <div>
          <label>Search:</label>
          <input placeholder='Search' onChange={(e) => searchItems(e.target.value)} />
        </div>
        <ul>
          {getCategory.map((item, index) => {
            return (<li key={index.toString()}>
              <a className={chooseCategory === item ? 'tabActive' : 'tabClick'}
                onClick={() => selectedCategory(item)}>{item}</a>
            </li>)
          })}
        </ul> */}
        {/* <ul className='productList'>
          {datalist.map((em, index) => (
            <li key={index.toString()}>
              <img src={em.picture} alt="" />
              <p>{em.name}</p>
              <p>{em.branches}</p>
              <p>{em.rating}</p>
              <button onClick={() => goToReserved(em)}>Go To Reserved</button>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default OrderOnline;



// https://codingstatus.com/portfolio-gallery-with-filtering-in-react/
// https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/