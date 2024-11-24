import React, { useState } from 'react'

const initialProduct = [
    {id: 1, title: 'Titulo', description: 'Descripción'},
    {id: 2, title: 'Titulo #2', description: 'Descripción #2'}

];

const ShoppingCart = () => {

    const [cart, setCart] = useState(initialProduct);

    //BOTON DE ELIMINAR POR ID
    const deleteProduct = (productId) => {

        const changedCart = cart.filter(product => product.id !== productId);
        setCart(changedCart);
    }
    //ELIMINAR TODO
    const deleteAll = () => {
        const changedCart = [];
        setCart(changedCart);
    }

    //AGREGAR NUEVO PRODUCTO
    const addProduct = (newProduct) => {
         newProduct.id = Date.now();

        const changedCart = [
            newProduct,
            ...cart,
                        
        ];
        setCart(changedCart);
    }

    // BOTON DE ACTUALIZAR O EDITAR PRODUCTO
    const updateProduct = (editProduct) => {
        const changedCart = cart.map(product => (
            product.id === editProduct.id
            ? editProduct
            : product
        ));
        setCart(changedCart);
    }


  return (
    <div>
        <button onClick={deleteAll}>Eliminar todo</button>
        <button onClick={() => addProduct({title: 'Nuevo Titulo', description: 'Nueva descripción'})}>Agregar</button>
        {
            cart.map(product => (
                <div key={product.id}>
                    <h1>{product.id} {product.title}</h1>
                    <p>{product.description}</p>
                    <button onClick={() => updateProduct({id: product.id, title: 'Edit Titulo', description: 'Edit descripción'})}>Editar</button>
                    <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
                </div>         
            ))
        }

        {/* VISUALIZAR UNA ARREGLO POR PANTALLA */}
        <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  )
}

export default ShoppingCart;
