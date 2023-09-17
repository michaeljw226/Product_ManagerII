import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";


const ProductListDisplay = () => {
    const [productList, setProductList] = useState([]);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products`)
            .then((res) => {
                setProductList(res.data)
                setLoaded(true)
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h2>All Products:</h2>
            {
                productList.map((oneProduct, idx) => {
                    return (
                        <div key={idx}>
                            <Link to={`/products/${oneProduct._id}`}>{oneProduct.title}</Link> 
                            <Link to={`/products/${oneProduct._id}/edit`}>Edit</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductListDisplay;