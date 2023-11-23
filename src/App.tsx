import { FC, useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormCarrito from './componentes/FormCarrito';
import GridCarrito from './componentes/GridCarrito';

const defaultProducts: Product[] = [
  
];

export const App: FC<{ name: string }> = ({ name }) => {
  const [products, setProducts] = useState(defaultProducts);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleAddProduct(newProduct: Product): void {
    newProduct.id = products.length;
    setProducts(products.concat(newProduct));
  }

  function handleRemoveProduct(productIdToRemove: number): void {

    const updatedProducts = products.filter((product) => product.id !== productIdToRemove);
  
    setProducts(updatedProducts);
  }


  function handleAddCartItemList(product: Product, value: number){
    let found = false;

    for (let i = 0; i < cartItems.length; i++){
      if (cartItems[i].product == product){
        cartItems[i].count = value;
        found = true;
        break;
      }
    }

    if (!found && value > 0){
      cartItems.push({product: product, count: 1});
    }

    setCartItems(cartItems);

    return cartItems;
  }


  return (
    <Container >
      <Row>
        <Col sm={4}>
         <FormCarrito addToList={handleAddProduct}/> 
        </Col>

        <Col sm={3} >
          <GridCarrito products={products} cartItems={cartItems} addToCart={handleAddCartItemList} removeProduct={handleRemoveProduct}/>
        </Col>
      </Row>
    </Container>
  );
};



