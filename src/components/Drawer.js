function Drawer( {onClose, onRemove, items = []} ) {
    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column p-30">
                <h2 className="m-0 mb-30 d-flex justify-between">
                    Корзина
                    <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
                </h2>

                {items.length > 0 ? (
                        <div>
                            <div className="items mb-30">
                            {items.map((el) => (
                                <div className="cart-item d-flex align-center p-20 mb-20">
                                <img
                                    width={70}
                                    height={70}
                                    className="mr-20"
                                    src={el.image}
                                    alt="Sneakers"
                                />
                                <div className="mr-20">
                                    <p className="mb-5">{el.name}</p>
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
                            <button className="greenButton">
                            Оформить заказ
                            <img src="/img/btn-arrow.svg" alt="Arrow" />
                            </button>
                        </div>
                        </div>
                    ) : (
                        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                            <img src="/img/empty-cart.png" alt="Empty cart" className="mb-20" width="120px" height="120px" />
                            <h2>Корзина пустая</h2>
                            <p className="opacity-6 text-center">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            <button onClick={onClose} className="greenButton">
                                <img src="/img/arrow.svg" alt="Arrow" className=""/> Вернуть назад
                            </button>
                        </div>
                    )}

            </div>
        </div>

        
    );
}

export default Drawer;
