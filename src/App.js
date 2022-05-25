import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const sneakers = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    image: "/img/sneakers/1.jpg"
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    image: "/img/sneakers/2.jpg"
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    image: "/img/sneakers/3.jpg"
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 8999,
    image: "/img/sneakers/4.jpg"
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 15199,
    image: "/img/sneakers/5.jpg"
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 11299,
    image: "/img/sneakers/6.jpg"
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 10799,
    image: "/img/sneakers/7.jpg"
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 16499,
    image: "/img/sneakers/8.jpg"
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 13999,
    image: "/img/sneakers/9.jpg"
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 8499,
    image: "/img/sneakers/10.jpg"
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 8999,
    image: "/img/sneakers/11.jpg"
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 11299,
    image: "/img/sneakers/12.jpg"
  }
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search-icon.svg" alt="Search" />
            <input className="p-10" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {
            sneakers.map(el => (
              <Card 
                title = {el.name}
                price = {el.price}
                imageUrl = {el.image}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
