import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { connect, useSelector, useDispatch } from 'react-redux';
import { addToCart, itemIncrement, itemDecrement, removeToCart, ordersuccess } from '../redux/Actions/index';

function Checkout(props) {

  const [items, Setitems] = useState([]);

  const [name, Setname] = useState('');
  const [email, Setemail] = useState('');
  const [cell, Setcell] = useState('');
  const [address, Setaddress] = useState('');

  const [nameErr, SetnameErr] = useState("");
  const [emailErr, SetemailErr] = useState("");
  const [cellErr, SetcellErr] = useState("");
  const [addressErr, SetaddressErr] = useState("");

  const [successBox, SetsuccessBox] = useState(false);
  const [finaldata, Setfinaldata] = useState({});

  let navigate = useNavigate();

  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state
  });

  const removeItem = (id) => {
    const newList = data.addtocart.cardData.filter((item) => item.id !== id);
    Setitems(newList);
    dispatch(removeToCart(
      id
    ))
  }

  const addExistingItem = (pItem) => {
    console.log('call addExistingItem', pItem);
    dispatch(itemIncrement(
      pItem
    ))
  }

  const removeExistingItem = (pItem) => {
    console.log('call removeExistingItem', pItem);
    dispatch(itemDecrement(
      pItem
    ))
  }

  function clearSubmission() {
    SetnameErr("");
    SetemailErr("");
    SetcellErr("");
    SetaddressErr("");
  }

  const orderPlaced = () => {
    clearSubmission();
    if (name == undefined || name == "" || name.length <= 5) {
      SetnameErr("enter name above 5 character");
    }
    var emailRgx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email == undefined || email == "" || !emailRgx.test(email)) {
      SetemailErr("enter your valid email address");
    }
    var cellRgx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (cell == undefined || cell == "" || (cellRgx.test(cell) == false)) {
      SetcellErr("enter your valid cell number");
    }
    if (address == undefined || address == "" || address.length <= 15) {
      SetaddressErr("enter your correct address");
    }
    if (name != '' &&
      email != '' &&
      cell != '' &&
      address != '') {
      const getdata = {
        name,
        email,
        cell,
        address
      }
      Setfinaldata(getdata);
      setTimeout(() => {
        Setname('');
        Setemail('');
        Setcell('');
        Setaddress('');
        dispatch(ordersuccess())
        SetsuccessBox(true);
      }, 1000);
    }
    else {
      return false
    }
  }

  const getTotal = (items) => {
    let subtotal = 0;
    items.forEach(item => {
      subtotal = subtotal + (item.productPrice * item.quantity)
    })
    return subtotal;
  }

  const tax = 13;
  const getSubTotal = (items) => {
    let subtotal = 0;
    items.forEach(item => {
      subtotal = subtotal + (item.productPrice * item.quantity)
    })
    return subtotal + tax;
  }

  const goToHome = () => {
    navigate('/');
    SetsuccessBox(false);
  }

  // var number = 50000
  // var percent = 5
  // var result = 0
  // for (var index = 0; index < number; index++) {
  //   const calculate = index / number * 100
  //   if (calculate == percent) result += index
  // }
  // console.log(result);

  useEffect(() => {
  }, [])

  return (
    <div>
      {successBox &&
        <dd>
          <div className='overlay' onClick={() => goToHome()}></div>
          <div className='successBox'>
            <button className='close' onClick={() => goToHome()}>X</button>
            <p>
              <strong>All good!</strong>
              Thanks for your order placing '{finaldata.name}' We will meet to your home shortly with your favorite food!
            </p>
          </div>
        </dd>}
      <div className='container'>
        <h3>Checkout</h3>
      </div>
      <div className='container clearfix'>
        <div className="main-wrapper">
          <div className="responsive-table">
            <table className='table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Img</th>
                  <th>ProductTitle</th>
                  <th>ProductPrice</th>
                  <th>ProductDescription</th>
                  <th>ProductType</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              {data.addtocart.cardData.length == 0 ? <div style={{ paddingTop: '15px' }}>Cart Is Empty...</div>
                :
                <tbody>
                  {data.addtocart.cardData.length >= 0 ?
                    data.addtocart.cardData?.map((pItem, index) => (
                      <tr key={index.toString()}>
                        <td>
                          <button onClick={() => addExistingItem(pItem)}>+</button>
                          <button onClick={() => removeExistingItem(pItem)}>-</button>
                        </td>
                        <td><img src={pItem.productImg} alt="" /></td>
                        <td>{pItem.productTitle}</td>
                        <td>{pItem.productPrice}</td>
                        <td>{pItem.productDescription}</td>
                        <td>{pItem.productType}</td>
                        <td>{pItem.quantity}</td>
                        <td><button className='tableCrros' onClick={() => removeItem(pItem.id)}>X</button></td>
                      </tr>
                    ))
                    : <p>Card is Empty</p>
                  }
                </tbody>
              }
            </table>
          </div>
        </div>
      </div>
      {data.addtocart.cardData.length == 0 ? null :
        <div className='container clearfix'>
          <h4>before order placing fill required field otherwise order does not place!</h4>
          <div className='formBox'>
            <div>
              <label>Name</label>
              <input type='text' value={name} onChange={(e) => Setname(e.target.value)} />
              <p className='error'>{nameErr}</p>
            </div>
            <div>
              <label>Email</label>
              <input type='email' value={email} onChange={(e) => Setemail(e.target.value)} />
              <p className='error'>{emailErr}</p>
            </div>
            <div>
              <label>Cell</label>
              <input type='text' value={cell} onChange={(e) => Setcell(e.target.value)} />
              <p className='error'>{cellErr}</p>
            </div>
            <div>
              <label>Address</label>
              <input type='text' value={address} onChange={(e) => Setaddress(e.target.value)} />
              <p className='error'>{addressErr}</p>
            </div>
          </div>
          <dd className='checkOutAmmount'>Total :${getTotal(data.addtocart.cardData)}</dd>
          <dd className='checkOutAmmount'>Tax (13%) :${tax}</dd>
          <dd className='checkOutAmmount'>Products Quantity: {data.addtocart.cardData.length}</dd>
          <dd className='checkOutAmmount'>Sub Total :${getSubTotal(data.addtocart.cardData)}</dd>
          <button className='orderPlaceBtn' onClick={() => orderPlaced()}>Order Place</button>
        </div>}
    </div>
  );
}

export default Checkout;



