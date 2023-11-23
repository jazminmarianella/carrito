import React from 'react';
import { useState } from 'react';
import { Product, CartItem } from '../types';

import ItemCarrito from './ItemCarrito';
import styles from "../style.css";


type ProductTableProps = {
  products: Product[];
  cartItems: CartItem[];
  // addToCart: (p: Product, v: number)=> CartItem[];
  addToCart: (p: Product, v: number) => void;
  removeProduct: (idToRemove: number) => void;

};


function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="currentColor"
      // class="bi bi-cart4"
      viewBox="0 0 16 16"
    >
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
    </svg>
  );
}


function GridCarrito(props:ProductTableProps) {
  const [total, setTotal] = useState(0)

  function onRemoveProduct(idToRemove:number){
    props.removeProduct(idToRemove);
  }

  function onAddToCart(product:Product,value:number) {
    props.addToCart(product, value);

    const total = 
    props.cartItems.length > 0
      ? props.cartItems
          .filter((item) => item.count > 0)
          .map((item) => item.product.price * item.count)
          .reduce((acc, cv) => acc + cv, 0)
      : 0;

  
    setTotal(total);

  }

  return (
    <section className={styles.productTable}>
        <h4 className={styles.total}>
          <CartIcon/> ${total}
        </h4>
         <div className={styles.productDisplay}>
            {props.products.map((product) => {
              return (
                <ItemCarrito key={product.id} product={product} addToCart={onAddToCart} removeProduct={onRemoveProduct}/>
              );
            })}
        </div>
    </section>
  );

};

export default GridCarrito;
