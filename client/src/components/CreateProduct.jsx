import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const CreateProduct = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState([])

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description,
        })
            .then(() => navigate("/products")

            ).catch((err) => {
                const errResponse = err.response.data.errors;
                const errArr = [];
                for (const key in errResponse) {
                    errArr.push(errResponse[key].message)
                }
                setErrors(errArr);
            });
    };

    return (
        <div>
            <>
                <form onSubmit={submitHandler}>
                    <div>
                        <label >Product Title:</label>
                        <input type='text'
                            value={title}
                            onChange={((e) => setTitle(e.target.value))} />
                    </div>
                    <div>
                        <label >Product Price:</label>
                        <input type='text'
                            value={price}
                            onChange={((e) => setPrice(e.target.value))} />
                    </div>
                    <div>
                        <label >Product Description:</label>
                        <textarea rows="2" cols="27"
                            onChange={(e) => setDescription(e.target.value)}>
                            {description}
                        </textarea>
                    </div>

                    <input type="submit" value="Create Product" />
                </form>
                {
                    errors.map((err, idx) => {
                        <p key={idx}>{err}</p>
                    })
                }
            </>
        </div>
    )
}

export default CreateProduct;