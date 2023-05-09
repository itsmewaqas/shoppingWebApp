import React, { useState, useEffect, useRef } from 'react';
import {
    useNavigate,
    Link
} from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { connect, useSelector, useDispatch } from 'react-redux';
import { removeToCart } from '../redux/Actions/index';

function Header(props) {

    const [items, Setitems] = useState([]);
    const [cartList, SetcartList] = useState(false);
    const [responsiveMenu, SetresponsiveMenu] = useState("resMenuShow");

    const catMenu = useRef(null)
    const closeOpenMenus = (e) => {
        if (catMenu.current && cartList && !catMenu.current.contains(e.target)) {
            SetcartList(false)
        }
    }
    document.addEventListener('mousedown', closeOpenMenus)

    let navigate = useNavigate();

    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state
    });

    const showCart = () => {
        SetcartList(!cartList)
    }

    const removeItem = (id) => {
        const newList = data.addtocart.cardData.filter((item) => item.id !== id);
        Setitems(newList);
        dispatch(removeToCart(
            id
        ))
    }

    const getTotal = (items) => {
        let subtotal = 0;
        items.forEach(item => {
            subtotal = subtotal + (item.productPrice * item.quantity)
        })
        return subtotal;
    }

    const viewToCheckout = () => {
        navigate('/Checkout');
        SetcartList(false);
    }

    const resMenu = () => {
        SetresponsiveMenu(responsiveMenu == 'resMenuShow' ? 'resMenuHide' : 'resMenuShow');
    }

    useEffect(() => {
    }, [])

    return (
        <header>
            <a className='hamburgerMenu' onClick={() => resMenu()}><img src={require('../assets/img/hamburgerMenu.png')} alt='' /></a>
            <a className='logo'><img src={require('../assets/img/logo.png')} /></a>
            <div className={responsiveMenu}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Menu">Menu</Link></li>
                    <li><Link to="/Reservations">Reservations</Link></li>
                    <li><Link to="/OrderOnline">OrderOnline</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                    <li><a onClick={() => showCart()}><img src={require('../assets/img/shoppingCart.png')} alt='' /> <span>{data.addtocart.cardData.length}</span></a></li>
                </ul>
                {cartList && <div className='cartMenu' ref={catMenu}>
                    {data.addtocart.cardData.length == 0 ? <dd>Cart Is Empty...</dd>
                        :
                        <div>
                            <Scrollbars style={{ height: 250 }}>
                                <ul>
                                    {data.addtocart.cardData.length >= 0 ?
                                        data.addtocart.cardData?.map((pItem, index) => (
                                            <li key={index.toString()}>
                                                <img src={pItem.productImg} alt="" />
                                                <p>{pItem.productTitle}
                                                    <span>Price: ${pItem.productPrice}</span></p>
                                                <button onClick={() => removeItem(pItem.id)}>X</button>
                                            </li>
                                        ))
                                        : <p>Card is Empty</p>
                                    }
                                </ul>
                            </Scrollbars>
                            <dd>Total Amount :${getTotal(data.addtocart.cardData)}</dd>
                            <button className='checkOutBtn' onClick={() => viewToCheckout()}>Proceed To Checkout</button>
                        </div>
                    }
                </div>}
            </div>
        </header>
    );
}

export default Header;


// https://www.npmjs.com/package/react-custom-scrollbars-2