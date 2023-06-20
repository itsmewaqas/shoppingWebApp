import React, { useState, useEffect, useMemo } from 'react';
import {
  useNavigate,
  Link
} from "react-router-dom";

function Login() {


  let navigate = useNavigate();

  const [sportList, setSportList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

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

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function getFilteredList() {
    if (!selectedCategory) {
      return sportList;
    }
    return sportList.filter((item) => item.category === selectedCategory);
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);


  const goToReserved = (elm) => {
    navigate('/Reservations', { state: elm });
  }

  useEffect(() => {
    setSportList(restaurantsList);
  }, [])

  return (
    <div>
      <div className='container'>
        <h3>Login</h3>

        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="Cafe">Cafe</option>
            <option value="Fastfood">Fast Food</option>
            <option value="Casualdining">Casual Dining</option>
            <option value="Steakhouse">Steak House</option>
          </select>
        </div>
        <ul className="restaurantsList clearfix">
          {filteredList.map((elm, index) => (
            <li key={index.toString()}>
              <img src={elm.restaurantPic} alt="" />
              <p>{elm.name} <span>{elm.location}</span></p>
              <button onClick={() => goToReserved(elm)}>Go To Reserved</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Login;



// https://contactmentor.com/filter-list-by-category-react-js/

