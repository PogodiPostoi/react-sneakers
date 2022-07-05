import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import {AppContext} from "../../App"

function Card({
    id,
    onFavorite,
    onPlus,
    imageUrl,
    title,
    price,
    favorited = false,
    loading 
}) {
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const {isItemAdded} = React.useContext(AppContext)

    const onClickPlus = () => {
        onPlus({ id, imageUrl, title, price });
    };

    const onClickFavorite = () => {
        onFavorite({ id, imageUrl, title, price });
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>

        { 
            loading ?
                <ContentLoader
                speed={2}
                width={155}
                height={265}
                viewBox="0 0 155 265"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                // {...props}
                >
                    <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                    <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                    <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>
            :
                <>
                    <div className={styles.favorite} onClick={onClickFavorite}>
                        <img
                        src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
                        alt="unliked"
                    />
                    </div>
                    <img width={133} height={112} src={imageUrl} alt="" />
                    <h5>{title}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>{price} руб</b>
                        </div>
                        <img
                        className={styles.plus}
                        onClick={onClickPlus}
                        src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-unchecked.svg"}
                        alt="Plus"
                        />
                    </div>
                </>
        

        }

</div>
    );
    }

export default Card;

    // const MyLoader = (props) => (
    // <ContentLoader
    //     speed={2}
    //     width={155}
    //     height={265}
    //     viewBox="0 0 155 265"
    //     backgroundColor="#f3f3f3"
    //     foregroundColor="#ecebeb"
    //     {...props}
    // >
    //     <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
    //     <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
    //     <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
    //     <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
    //     <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
    // </ContentLoader>
    // );
