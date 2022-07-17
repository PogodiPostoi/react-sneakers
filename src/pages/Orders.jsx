import axios from "axios";
import React from "react";
import Card from "../components/Card";
import {AppContext} from "../App"


function Orders() {
    const [orders, setOrders] = React.useState([])
    const {onAddToFavorite} = React.useContext(AppContext)
    const [isLoading, setIsLoading] = React.useState(true);



    React.useEffect(() => {
        /* Самовызывающаяся функция. Альтернативный вариант того, что в app.js*/ 
        (async () => {
            try {
                const { data } = await axios.get('https://62920ec19d159855f084db80.mockapi.io/orders')

                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
            } catch (error) {
                alert("Не удалось показать покупки")
                console.error(error)
            }

        })()
    }, [])

    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Мои покупки</h1>
            </div>

            <div className="d-flex flex-wrap">
            {(isLoading 
                ? Array(4).fill(<Card loading={isLoading}/>) 
                : orders).map((item, index) => (
                    <Card
                    key={index}
                    title={item.title}
                    price={item.price}
                    imageUrl={item.image}
                    id={item.id}
                    loading={isLoading}
                    />
                ))}
            </div>
        </div>
    );
}

export default Orders;
