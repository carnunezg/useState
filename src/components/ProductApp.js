import React, { useState } from 'react'

const initialProduct = {
    title: 'Titulo',
    description: 'Descripción'
}

const ProductApp = () => {

    const [product, setProdut] = useState(initialProduct);

    const updateProduct = (property, value) => {
        setProdut({
            ...product,
            [property]: value
        });
    }

  return (
    <div>
        <button onClick={() => updateProduct('description', 'Nueva descripción')}>Update</button>
        <h1>{product.title}</h1>
        <h1>{product.description}</h1>


        {/* Imprimir en pantalle el objeto */}
        <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  )
}

export default ProductApp;
