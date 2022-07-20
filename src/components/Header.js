import React from 'react';

import {Link} from 'react-router-dom'
import {useCart} from '../hooks/useCart'

function Header(props) {
    const {totalPrice} = useCart()

    return (
        <header className="d-flex justify-between align-center p-40">
        <Link to="/">
            <div className="header-left d-flex align-center">
                <img
                className="mr-15"
                src="img/sneaker-logo.png"
                alt="sneaker-logos"
                />
                <div>
                    <h3 className="text-uppercase"> React Sneakers </h3>
                    <p className="opacity-5"> Магазин лучших кроссовок </p>
                </div>
            </div>
        </Link>
        <ul className="header-right d-flex">
            <li className="cu-p" onClick={props.onClickCart}>
                <img className="mr-10" src="img/cart.svg" alt="cart-icon" />
                <span> {totalPrice ? `${totalPrice} руб.` : ''} </span>
            </li>
            <li>
                <Link to="/favorites">
                    <img src="img/favorite.svg" alt="favorite-icon" className="cu-p"/>
                </Link>
            </li>
            <li>
                <Link to="/orders">
                    <img src="img/profile.svg" alt="profile-icon" />
                </Link>
                
            </li>
        </ul>
        </header>
    );
}

export default Header;
