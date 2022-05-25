import styles from './Card.module.scss'

function Card(props) {
    const onClickButton = () => {
        alert(props.title)
    }

    return (
        //"card p-30 m-15"
        <div className={styles.card}> 
            <div className={styles.favorite}>
                <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{props.price} руб</b>
            </div>
            <button className={styles.button}  onClick={onClickButton}> 
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
            </div>
        </div>
    )
}

export default Card