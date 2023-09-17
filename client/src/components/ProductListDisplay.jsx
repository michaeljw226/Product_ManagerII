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
    const handleDelete = (deleteId) => {
        axios
        .delete(`http://localhost:8000/api/products/${deleteId}`)
        .then(() => {
            console.log("Deleted!");
            removeFromDom(deleteId)
        })
        .catch((err) => console.log(err))
    };

    const removeFromDom = (deleteId) => {
        const filteredList = productList.filter(
            (eachProduct, idx) => eachProduct._id !== deleteId 
        );
        setLoaded(filteredList);
    }

    return (
        <div>
            <h2>All Products:</h2>
            {
                productList.map((oneProduct, idx) => {
                    return (
                        <>
                            <div key={idx}>
                                <Link to={`/products/${oneProduct._id}`}>{oneProduct.title}</Link>
                            </div>
                            <div>
                                <Link to={`/products/${oneProduct._id}/edit`}>
                                    <button>Edit Product</button>
                                </Link>
                                <button onClick={() => handleDelete(oneProduct._id)}>Delete Product</button>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}
export default ProductListDisplay;