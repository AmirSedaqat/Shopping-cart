import React, { useContext } from 'react';
//context
import { CartContext } from '../../context/CartContextReducer';
//functions
import { shorten } from '../../helpers/functions';
//Icon
import trashIcon from '../../assets/icons/trash.svg';
import upIcon from '../../assets/icons/arrow.svg';
import downIcon from '../../assets/icons/downArrow.svg';
import styles from '../../styles/Cart.module.css'

const Cart = (props) => {
    const { dispatch } = useContext(CartContext)
    const { image, title, price, quantity } = props.data;

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="Product" />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                        <button onClick={() => dispatch({ type: "DECREASE", payload: props.data })}><img src={downIcon} alt="DownIcon"/></button> :
                        <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}><img src={trashIcon} alt="Trash"/></button>
                }
                <button onClick={() => dispatch({ type: "INCREASE", payload: props.data })}><img src={upIcon} alt="upIcon"/></button>

            </div>
        </div>
    );
};

export default Cart;