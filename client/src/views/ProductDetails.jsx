import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const {id} = useParams();

  useEffect(() => {
    axios 
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      <h1>Product Details:</h1>
      <h2>{product.title}</h2>
      <h2>{product.price}</h2>
      <h2>{product.description}</h2>
    </div>
  )
}

export default ProductDetails