import { type } from '@testing-library/user-event/dist/type';
import React, { useState, useEffect } from 'react';

function OrderOnline(props) {

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
      id: 10,
      category: 'Steakhouse',
      name: "Mandarin Gourmet",
      location: "Karachi Central",
      restaurantPic: require('../assets/img/biryani.jpg'),
    },
  ]

  const [chooseCategory, SetchooseCategory] = useState('All');
  const [datalist, Setdatalist] = useState(restaurantsList);
 
  const selectedCategory = (chooseCategory) => {
    SetchooseCategory(chooseCategory);
  }

  const getCategory = ['All', ...new Set(restaurantsList.map(q => q.category))];
  console.log('getCategory', getCategory);
  


  // const setFilterData = (chooseCategory) => {
  //   if (chooseCategory !== 'All') {
  //     Setdatalist([...restaurantsList.filter(e => e.category === chooseCategory)]);
  //   }
  //   else {
  //     Setdatalist(restaurantsList)
  //   }
  //   SetchooseCategory(chooseCategory);
  // }










  useEffect(() => {
  }, [])

  return (
    <div>
      <div className='container'>
        <h3>Order Online</h3>
      </div>
      <div className='container'>
        <ul className='tablist'>
          {getCategory.map((item, index) => {
            return (<li key={index.toString()}>
              <a className={chooseCategory === item ? 'tabActive' : 'tabClick'}
                onClick={() => selectedCategory(item)}>{item}</a>
            </li>)
          })}
        </ul>

        <ul className='productList'>
          {datalist.map((em, index) => (
            <li key={index.toString()}>
              <img src={em.restaurantPic} alt="" />
              <p>{em.name}</p>
              <p>{em.location}</p>
              <p>{em.category}</p>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default OrderOnline;