function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="header-left d-flex align-center">
            <img
            className="mr-15"
            src="/img/sneaker-logo.png"
            alt="sneaker-logos"
            />
            <div>
                <h3 className="text-uppercase"> React Sneakers </h3>
                <p className="opacity-5"> Магазин лучших кроссовок </p>
            </div>
        </div>
        <ul className="header-right d-flex">
            <li className="cu-p" onClick={props.onClickCart}>
                <img className="mr-10" src="/img/cart.svg" alt="cart-icon" />
                <span> 1205 руб. </span>
            </li>
            <li>
                <img src="/img/favorite.svg" alt="favorite-icon" />
            </li>
            <li>
                <img src="/img/profile.svg" alt="profile-icon" />
            </li>
        </ul>
        </header>
    );
}

export default Header;
