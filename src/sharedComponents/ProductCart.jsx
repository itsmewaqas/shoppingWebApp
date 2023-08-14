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

function ProductCart(props) {

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
        <div className='reservationListBlock' style={{ marginTop: '50px' }}>
          <ul>
            {props.data?.map((item, index) => (
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
  );
}




export default ProductCart;











































// import React, { useState, useEffect } from 'react';
// import productList from '../sharedComponents/ProductList';
// import { connect, useSelector, useDispatch } from 'react-redux';
// import { itemIncrement, itemDecrement } from '../redux/Actions/index';

// function ProductCart(props) {

//   const dispatch = useDispatch();
//   const data = useSelector((state) => {
//     return state
//   });

//   const addExistingItem = (item) => {
//     console.log('call addExistingItem', item);
//     dispatch(itemIncrement(
//       item
//     ))
//   }

//   const removeExistingItem = (item) => {
//     console.log('call removeExistingItem', item);
//     dispatch(itemDecrement(
//       item
//     ))
//   }

//   useEffect(() => { 
//   }, [])

//   return (
//     <div>
//       <ul className='productList'>
//         {props.data?.map((item, index) => (
//           <li key={index.toString()}>
//             <img src={item.productImg} alt="" />
//             <h3>{item.productTitle}<span>${item.productPrice}</span></h3>
//             <p>{item.productDescription}</p>
//             {/* {props.visibilityCtrl && <div></div>} */}
//             {data.addtocart.cardData.filter(x => x.id == item.id).map(em => (
//               <div className='qtyCtrl'>
//                 <button className='miniBtn' onClick={() => removeExistingItem(item)}>-</button>
//                 <p> Qty: {em.quantity}</p>
//                 <button className='miniBtn' onClick={() => addExistingItem(item)}>+</button>
//               </div>
//             ))}
//             <button
//               disabled={data.addtocart.cardData.some((x) => (x.id == item.id))}
//               onClick={() => props.addToCart(item)}>Order a delivery
//               <img src={require('../assets/img/fast-delivery.png')} alt="" />
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div >
//   );
// }

// export default ProductCart;