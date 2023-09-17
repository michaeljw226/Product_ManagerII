import React, {useState, useEffect} from 'react'
import axios from "axios";
import CreateProduct from '../components/CreateProduct';
import ProductListDisplay from '../components/ProductListDisplay';



const Dashboard = () => {
    return (
        <div>
            <CreateProduct />
            <ProductListDisplay />
        </div>
    )
}

export default Dashboard;