
import Card from "../components/Card";

function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart}) {
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
                {items.filter((item) =>
                    item.name.toLowerCase().includes(searchValue.toLowerCase())
                ).map((item, index) => (
                    <Card
                    key={index}
                    title={item.name}
                    price={item.price}
                    imageUrl={item.image}
                    id={item.id}
                    onPlus={(el) => onAddToCart(item)}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
