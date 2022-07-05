import React from "react";
import Card from "../components/Card";
import {AppContext} from "../App"

function Favorites() {
    const {favorites, onAddToFavorite, onAddToCart} = React.useContext(AppContext)

    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Мои закладки</h1>
            </div>

            <div className="d-flex flex-wrap">
            {favorites.map((item, index) => (
                    <Card
                    key={index}
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    id={item.id}
                    onPlus={(el) => onAddToCart(item)}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    favorited={true}
                    />
                ))}
            </div>
        </div>
    );
}

export default Favorites;
