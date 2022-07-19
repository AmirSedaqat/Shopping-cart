import React, { useContext } from 'react';
//Component
import Cart from './shared/Cart';
//Context
import { CartContext } from '../context/CartContextReducer';
import { Link } from 'react-router-dom';
import styles from '../styles/ShopCart.module.css';


const ShopCart = () => {
    const { state, dispatch } = useContext(CartContext)
    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>

            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>Total Items : {state.itemsCounter}</span></p>
                    <p><span>Total Payments : {state.total}</span></p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.checkout} onClick={() => dispatch({ type: "CHECKOUT" })}>CheckOut</button>
                        <button className={styles.clear} onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
                    </div>
                </div>
            }
            {
                (!state.itemsCounter && !state.checkOut) && <div className={styles.complete}>
                    <h3>Want To Buy ??</h3>
                    <Link to="/products">Go to Shop</Link>
                </div>
            }
            {
                state.checkOut && <div className={styles.complete}>
                    <h3>Checked Out Successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }
        </div>

    );
};

export default ShopCart;