import React, { useState, useEffect } from 'react';
import RestaurantList from '../sharedComponents/RestaurantList';

function About() {

  const checkListCategory = [...new Set(RestaurantList.map(x => x.category))];
  console.log('checkListCategory', checkListCategory);

  const [datalist, Setdatalist] = useState(RestaurantList);
  const [checkList, SetcheckList] = useState([]);

  const handleChange = (e) => {
    const { checked, value } = e.currentTarget;
    SetcheckList(
      prev => checked
        ? [...prev, value]
        : prev.filter(val => val !== value)
    );
  };

  const newFilterdList = checkList.length > 0 ? datalist.filter(x => checkList.includes(x.category)) : datalist;
  console.log('checkList', checkList);

  // const filterRestaurant = checkList.length > 0 ? datalist.filter(s => checkList.includes(s.category)) : datalist;
  
  useEffect(() => {
  }, [])

  return (
    <div>
      <div className='container' style={{ paddingBottom: '180px' }}>
        <h3>About</h3>
        <p>Since our modest beginnings in 2022 with a little space in Toronto’s stylish Yorkville locale, ‘Little Lemon Restaurant’ ‘s
          development has been enlivened with the energy to cook and serve solid, Pakistani-roused takeout food.</p>
        <p>In contrast to other Pakistani eateries, ‘Little Lemon Restaurant ’ was made with the explicit expectation to appear as something else.</p>
        <p>We realize numerous individuals love Pakistani sustenance, yet a large number of them loathe or are unconscious of the regularly
          unfortunate fixings that make run-of-the-mill Pakistani nourishment taste so great.</p>

        <div style={{ clear: 'both', paddingBottom: '60px' }}>
          {
            checkListCategory.map((item, index) => {
              return <label key={index.toString()}>
                <input type="checkbox" value={item} id="flexCheckDefault" onChange={handleChange} />{item}
              </label>
            })
          }
        </div>

        <div className='reservationListBlock' style={{ clear: 'both' }}>
          <ul>
            {newFilterdList.length == 0 ? datalist.map : newFilterdList.map((em, index) => (
              <li key={index.toString()}>
                <img src={em.picture} alt="" />
                <h1>{em.name}
                  <span><img src={require('../assets/img/star2.png')} alt='' /> {em.rating}</span></h1>
                {/* <LocationSelect
                  menuData={em.branches}
                  handleDropdown={(e) => selectLoction(e, em.id)} />
                <button className='addBtn' onClick={() => goToReserved(em)}>
                  <img src={require('../assets/img/add.png')} title='Add' alt="" />
                </button> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;



