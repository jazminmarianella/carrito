import React from 'react';
import { useState } from 'react';
import { Product } from '../types'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

type ProductFormProps = {
  addToList: (p: Product)=> void;
};


function FormCarrito(props:ProductFormProps) {
  const [validated, setValidated] = useState(false);

  const [name,setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.00);

  function handleName(event) {
    setName(event.target.value);
  }

  function handleDescription(event) {
    setDescription(event.target.value);
  }

  function handlePrice(event) {
    setPrice(event.target.value);
  }

  function handleClick(e){
    //e.preventDefault();
    props.addToList({
      id: -1,
      name: name,
      description: description,
      price: price
    });

    setName("");
    setDescription("");
    setPrice(0);
  }



  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicProductName">
        <Form.Label>Nombre de producto</Form.Label>
        <Form.Control required type="text" placeholder="Ingresar nombre de producto" value={name} onChange={handleName} />
        <Form.Control.Feedback type="invalid">
              Por favor ingrese un producto
            </Form.Control.Feedback>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicProductsDescription">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" placeholder="Ingresar una descripcion" value={description} onChange={handleDescription} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Precio</Form.Label>
        <Form.Control required type="number" step="0.01" placeholder="Ingresar precio de producto" value={price} onChange={handlePrice}/>
        <Form.Control.Feedback type="invalid">
              Por favor ingrese un precio
            </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleClick} disabled={!(name!="" && price>0)}>
        Agregar
      </Button>
    </Form>
  );
}

export default FormCarrito;

