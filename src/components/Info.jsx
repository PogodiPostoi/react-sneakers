import React from 'react'
import { AppContext } from '../App'

const Info = ({image, title, description}) => {
    const {setCartOpened} = React.useContext(AppContext)
    
    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img src={image} alt="Empty cart" className="mb-20" width="120px" />
            <h2>{title}</h2>
            <p className="opacity-6 text-center">{description}</p>
            <button onClick={() => setCartOpened(false)} className="greenButton">
                <img src="/img/arrow.svg" alt="Arrow" className=""/> Вернуть назад
            </button>
        </div>
    )
}

export default Info