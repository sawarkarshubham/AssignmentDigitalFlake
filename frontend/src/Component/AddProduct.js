import React from "react";

const AddProduct =()=>{
    const [category,setCategory]=React.useState("");
    const [productName,setProductName]=React.useState("");
    const [PackSize,setPackSize]=React.useState("");
    const [mrp,setMrp]=React.useState("");
    const [productImg,setProductImg]=React.useState("");
    const [status,setStatus]=React.useState("");
    const [error,setError]=React.useState(false)

    const addProduct= async ()=>{
        console.warn(!category);
        if(!category || !productName || !PackSize || !mrp || !productImg || !status){
            setError(true)
            return false;
        }



        console.warn(category,productName,PackSize,mrp,productImg,status);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.warn(userId._id)   // for checking userID at console
        
        let result=  await fetch('http://localhost:5001/add-product',{
            method:'post',
            body: JSON.stringify({category,productName,PackSize,mrp,productImg,status,userId}),
            headers:{
             'Content-Type':'application/json'
            },
        }); 
        result=await result.json();
       console.warn(result)
    }
    
    return(

       <div className="addproduct">
        <h1 className="signHeader">Add Product</h1>
        
        <div className="p-block">
        <input className="inputBox" type="text"  
         value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Category"/>
       {error && !category && <span className="invalidInput">Enter Valid Category</span>}

        <input className="inputBox"type="text" 
       value={productName} onChange={(e)=>setProductName(e.target.value)} placeholder="Product Name"/>
        {error && !productName && <span className="invalidInput">Enter Valid Product Name</span>}

        <input className="inputBox" type="text" 
       value={PackSize} onChange={(e)=>setPackSize(e.target.value)} placeholder="Pack Size"/>
       {error && !PackSize && <span className="invalidInput">Enter Valid Pack Size </span>}

       </div>
        

       <div className="p-block">
       <input className="inputBox" type="text" 
       value={mrp} onChange={(e)=>setMrp(e.target.value)} placeholder="MRP"/>
       {error && !mrp && <span className="invalidInput">Enter Valid MRP </span>}

       <input className="inputBox" type="text" 
       value={productImg} onChange={(e)=>setProductImg(e.target.value)}  placeholder="Product Image"/>
       {error && !productImg && <span className="invalidInput">Enter Valid Product Image</span>} 

      <input className="inputBox" type="text" 
       value={status} onChange={(e)=>setStatus(e.target.value)} placeholder="Status"/>
       {error && !status && <span className="invalidInput">Enter Valid Status</span>}
       </div>
       
        <div>
        <button onClick={addProduct}  className="signButton" type="button">Add Product</button>
        </div>

       </div>
    )
}
export default AddProduct;