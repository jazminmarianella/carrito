import React from 'react';
import { useState } from 'react';
import { Product, CartItem } from '../types'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "../style.css";

type ProductCardProps = {
  product: Product;
  // addToCart: (p: Product, c: number)=> CartItem[];
  addToCart: (p: Product, c: number)=> void;
  removeProduct: (idToRemove: number) => void;
}


function ItemCarrito(props:ProductCardProps) {

  const [count, setCount] = useState(0);

  function handleClose(){
  
    props.removeProduct(props.product.id)
  }


  function handleClick(event: any){

    let newCount = count;

    const v = event.target.value;
    if (v == "+") {
      newCount = count+1;
    }

    if(v == "-"){
      newCount = Math.max(0, count-1);
    }
    setCount(newCount);
    props.addToCart(props.product, newCount);

  }
  return (
    <Card style={styles.productCard}>
      <Card.Body>
        <Card.Title>
          <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {props.product.name}
          <Button variant='outline-danger' size="sm" onClick={handleClose} disabled={count!=0} >X</Button>
          </p>
        </Card.Title>
        <Card.Text>
          <p>{props.product.description}</p>
          <p>${props.product.price}</p>
        </Card.Text>
        <h5 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button variant="primary" onClick={handleClick} value="-">
            -
          </Button>
          {count} 
          <Button variant='primary' onClick={handleClick} value="+">
            +
          </Button>
        </h5>
      </Card.Body>
    </Card>
  )



};

export default ItemCarrito;