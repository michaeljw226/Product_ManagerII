
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './views/Dashboard';
import ProductDetails from './views/ProductDetails';
import UpdateProduct from './views/UpdateProduct';


function App() {
  return (
    <div className="App">
      <>
        <h1 >Product Manager</h1>
        <hr />
        {/* remove before submission */}
        <Link to = "/products" >Dashboard</Link>
        <Routes>
          <Route path ="/products" element = {<Dashboard />} />
          <Route path ="/products/:id" element = {<ProductDetails />} />
          <Route path ="/products/:id/edit" element = {<UpdateProduct />} />
          
        </Routes>
      </>
    </div>
  );
}

export default App;
