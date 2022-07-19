import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//context
import { CartContext } from '../../context/CartContextReducer';
//icon
import shopIcon from '../../assets/icons/shop.svg'
import muteIcon from '../../assets/icons/mute-svgrepo-com.svg';
//Styles
import styles from '../../styles/Navbar.module.css';
const Navbar = () => {
    const { state } = useContext(CartContext)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <img src={muteIcon} alt="Sedaghat"/><h2>Sedaghat</h2>
                
                </div>
                <Link className={styles.productLink} to="/products">Product</Link>
                <div className={styles.shopIcon}>
                    <Link to="/cart"><img src={shopIcon} alt="Shop" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;