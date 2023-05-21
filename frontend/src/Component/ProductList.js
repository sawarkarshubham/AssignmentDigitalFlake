// import Card from 'react-bootstrap/Card';

import { useEffect, useState } from "react";

function ProductList() {

    const [products, setProducts] = useState([]);
     
    useEffect(()=>{
         getProducts();
    },[]);

    const getProducts = async ()=>{
        let result = await fetch('http://localhost:5001/products')
        result = await result.json();
        setProducts(result);
    }
    console.warn("products" , products);

    const deleteProduct = async(id)=>{
        console.warn(id); // check id on console
        let result = await  fetch('http://localhost:5001/product/${id}',{
            method: "Delete"
        });
        result =  await result.json()
        if(result){
            getProducts();
        }
     }

    return (
      <div className="productList">
           <div className="pageHeading">   
                <h1> Product List </h1>
          </div>
            <ul>
                <li>S. No</li>
                <li>Category</li>
                <li>ProductName</li>
                <li>PackSize</li>
                <li>MRP</li>
                <li>ProductImg</li>
                <li>Status</li>
                <li>Operations</li>
            </ul>
            {
                products.map((item,index)=>
                <ul key={item._id}>
                
                <li>{index+1}</li>
                <li>{item.category}</li>
                <li>{item.productName}</li>
                <li>{item.packSize}</li>
                <li>{item.mrp}</li>
                <li>{item.productImg}</li>
                <li>{item.status}</li>
                <li>
                   <button onClick={()=>deleteProduct(item._id)} className="delete-btn" >Delete</button> 
                   <button className="update-btn" >Update</button>
                </li>
            </ul>
                )
            }
  
            
      </div>
    );
  }
  
  export default ProductList;