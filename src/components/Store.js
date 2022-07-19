import React, { useContext } from 'react';
//Context
import Product from './shared/Product';
import { ProductsContext } from '../context/ProductContextProvider';
//CSS
import styles from '../styles/Store.module.css'
const Store = () => {
    const Products = useContext(ProductsContext);
    return (

            <div className={styles.container}>
                {Products.map(item =>
                        <Product key={item.id}
                            productData={item} />)
                }
            </div>
    );
};

export default Store;