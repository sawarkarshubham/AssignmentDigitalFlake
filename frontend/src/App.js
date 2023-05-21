import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './Component/Nav';
import SignUp from './Component/SignUp';
import PrivateComponents from './Component/PrivateComponents';
import Login from './Component/Login';
import Home from './Component/Home';
import AddProduct from './Component/AddProduct';
import AddCategory from './Component/AddCategory';
import HomePage from './Component/HomePage';
import ProductList from './Component/ProductList';


function App(){
  return(
    <div className="App">
    <BrowserRouter>
    <Home/>
    <NavBar/>
  
     <div className='routeapp'>
       <Routes>

      <Route element={<PrivateComponents/>}>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/addproduct' element={<AddProduct/>}></Route>
        <Route path='/addcategory' element={<AddCategory/>}></Route> 
        <Route path='/logout' element={<h1>logout</h1>}></Route>
        <Route path='/products' element={<ProductList/>}></Route>


      </Route>

        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>

       </Routes>
       </div>
      </BrowserRouter>  
    </div>
  );
}
export default App;