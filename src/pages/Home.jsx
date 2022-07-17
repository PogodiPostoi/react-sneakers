import React from "react"
import Card from "../components/Card";

function Home({
            items, 
            searchValue, 
            setSearchValue, 
            onChangeSearchInput, 
            onAddToFavorite, 
            onAddToCart, 
            isLoading = false
        }) 
        {
            const renderItems = () => {
                const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))

                return (isLoading 
                            ? Array(8).fill(<Card loading={isLoading}/>) 
                            : filteredItems)
                    .map((item, index) => (
                        <Card
                            key={index}
                            parentId={item.parentId}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.image}
                            id={item.id}
                            onPlus={(obj) => onAddToCart(obj)}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            loading={isLoading}
                        />
                    ))
            }

            return (
                <div className="content p-40">
                    <div className="d-flex align-center mb-40 justify-between">
                        <h1>{searchValue ? `Поиск по: ${searchValue}` : "Все кроссовки"}</h1>
                        <div className="search-block d-flex">
                        <img src="/img/search-icon.svg" alt="Search" />
                        {searchValue && (
                            <img
                            onClick={() => setSearchValue("")}
                            className="clear cu-p"
                            src="/img/btn-remove.svg"
                            alt="Remove"
                            />
                        )}
                        <input
                            onChange={onChangeSearchInput}
                            value={searchValue}
                            placeholder="Поиск..."
                        />
                        </div>
                    </div>

                    <div className="d-flex flex-wrap">
                        {renderItems()}
                    </div>
                </div>
            );
}

export default Home;
