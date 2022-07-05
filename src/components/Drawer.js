import React from 'react';
import axios from 'axios';

import Info from "./Info";
import { AppContext } from '../App'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer( {onClose, onRemove, items = []} ) {
    const [isOrderComplete, setIsOrderComplete] = React.useState(false)
    const [orderId, setOrderId] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const {cartItems, setCartItems} = React.useContext(AppContext)

    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const {data} = await axios.post("https://62920ec19d159855f084db80.mockapi.io/orders", {
                items: cartItems
            })
            setOrderId(data.id)
            setIsOrderComplete(true)
            setCartItems([])

            /*Из-за особенностей mockAPI, делаем костыль на удаление*/ 
            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete("https://62920ec19d159855f084db80.mockapi.io/cart/" + item.id)
                delay(1000)
            }

        } catch (error) {
            alert ("Ошибка при создании заказа :(")
        }
        setIsLoading(false)
    }

    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column p-30">
                <h2 className="m-0 mb-30 d-flex justify-between">
                    Корзина
                    <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
                </h2>

                {items.length > 0 ? (
                        <div className="d-flex flex-column flex">
                            <div className="items mb-30">
                            {items.map((el) => (
                                <div key={el.id} className="cart-item d-flex align-center p-20 mb-20">
                                <img
                                    width={70}
                                    height={70}
                                    className="mr-20"
                                    src={el.image}
                                    alt="Sneakers"
                                />
                                <div className="mr-20">
                                    <p className="mb-5">{el.title}</p>
                                    <b>{el.price} руб.</b>
                                </div>
                                <img onClick={() => onRemove(el.id)} className="btn-remove" src="/img/btn-remove.svg" alt="Remove" />
                            </div>
                            ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                            <li className="d-flex">
                                <span>Итого:</span>
                                <div></div>
                                <b>21 498 руб.</b>
                            </li>
                            <li className="d-flex">
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>1074 руб.</b>
                            </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className="greenButton">
                            Оформить заказ
                            <img src="/img/btn-arrow.svg" alt="Arrow" />
                            </button>
                        </div>
                        </div>
                    ) : (
                        <Info
                            title = {isOrderComplete ? "Заказ оформлен!" : "Корзина пуста"}
                            image = {isOrderComplete ? "/img/complete-order.png" : "/img/empty-cart.png"}
                            description= {isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок"}
                        />
                    )}

            </div>
        </div>

        
    );
}

export default Drawer;
