import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://62920ec19d159855f084db80.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  }, [])

  const onAddToCart = (el) => {
    //setCartItems(prev => prev.includes(el) ? prev.filter(!prev.findIndex(el)) : [...prev, el])
    setCartItems(prev => [...prev, el])
  }

  console.log(cartItems)

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search-icon.svg" alt="Search" />
            <input className="p-10" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.name}
              price={item.price}
              imageUrl={item.image}
              onPlus={el => onAddToCart(item)}
              onFavorite={() => console.log("Добавили в закладки")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
