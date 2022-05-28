function Drawer( {onClose, items = []} ) {
    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column p-30">
                <h2 className="m-0 mb-30 d-flex justify-between">
                    Корзина
                    <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
                </h2>

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
                        <img className="btn-remove" src="/img/btn-remove.svg" alt="Remove" />
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
        </div>

        
    );
}

export default Drawer;
