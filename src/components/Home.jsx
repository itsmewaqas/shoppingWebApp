import { type } from '@testing-library/user-event/dist/type';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import herroBanner from '../assets/img/herroBanner.jpg';
import productList from '../sharedComponents/ProductList';
import TestimonialList from '../sharedComponents/TestimonialList';
import ProductCart from '../sharedComponents/ProductCart';
import { connect, useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/Actions/index';

function Home() {

  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state
  });

  let navigate = useNavigate();

  const [state, Setstate] = useState(null);

  // data filter
  const filterProductList = productList.filter(x => x.productType == 'future');

  // data get randomly
  const finalData = filterProductList.sort(() => Math.random() - Math.random()).slice(0, 4);

  //herro picture show randomly
  const herroPicture = productList.sort(() => Math.random() - Math.random()).slice(0, 1);

  //testimonial show randomly
  const testimonialData = TestimonialList.sort(() => Math.random() - Math.random());

  // const addToCard = (item) => {
  //   console.log(item);
  // }

  const [productItem, SetproductItem] = useState([]);

  const addItem = (item) => {
    SetproductItem(productItem => [...productItem, item]);
    dispatch(addToCart(
      item
    ))
  }

  const gotoReservations = () => {
    navigate('/Reservations');
  }

  const gotoMenu = () => {
    navigate('/Menu');
  }

  useEffect(() => {
  }, [])

  return (
    <section>
      <div className='hearoSection'>
        <div className='hearoSectionContent clearfix'>
          <div>
            <h1>Little Lemon<span>Chicago</span></h1>
            <p>We are a family owned
              Mediterranean restaurant,
              focused on raditioal
              recipes servd with a modre
              twist.</p>
            <button className='btn1' onClick={() => gotoReservations()}>Reserve a Table</button>
          </div>
          <div>
            {herroPicture?.map((p, index) => (
              <img key={index.toString()} className='heroImg' src={p.productImg} alt="" />
            ))}
          </div>
        </div>
      </div>
      <div className='container'>
        <h2>This Weeks specials!<button className='btn1' onClick={() => gotoMenu()}>Online Menu</button></h2>
      </div>
      <div className='container'>
        {/* <ProductCart
          data={finalData} 
          addToCart={(item) => addItem(item)}
        /> */}
      </div>
      <div className='testimonialsBlock'>
        <div className='container'>
          <h3>Testimonials</h3>
          <ul className='testimonialsList'>
            {testimonialData?.map((item, index) => (
              <li key={index.toString()}>
                <img src={item.tesImg} alt="" />
                <h5>{item.tesName}</h5>
                <p>{item.tesDescription}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='hoemAboutSec'>
        <div className='hoemAboutSecContent'>
          <div>
            <h4>Testimonials <span>Chicago</span></h4>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
          </div>
          <div>
            <img src={require('../assets/img/aboutBanner.png')} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;



