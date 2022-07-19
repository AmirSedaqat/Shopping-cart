import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsContext } from '../context/ProductContextProvider';
import styles from '../styles/ProductDetails.module.css'

const ProductDetails = (props) => {
    const params = useParams()
    const id = params.id;
    const data = useContext(ProductsContext)
    const product = data[id - 1]
    const { image, category, title, price, description } = product;
    return (
        <div className={styles.container}>
            <img className={styles.images} src={image} alt='Product Deta' />

            <div className={styles.infoProduct}>
                <h1>Details: {title} </h1>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}>Category :<span>{category}</span></p>
                <div className={styles.buttonContainer}>
                    <Link className={styles.back} to='/products'>Back to Shop</Link>
                    <span className={styles.price}>{price} $</span>
                </div>
            </div>
        </div>
    )
};

export default ProductDetails;