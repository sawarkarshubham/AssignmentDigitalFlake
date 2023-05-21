import React from "react";

const AddCategory =()=>{
    
    return(

       <div className="addproduct">
    

        <h1 className="signHeader">Add Category</h1>
        <div className="p-block">
        <input className="inputBox" type="text" 
         placeholder="Category Name"/>
        
        <input className="inputBox" type="text"
       placeholder="Description"/>
        
        <input className="inputBox" type="text" 
       placeholder="Status"/>
      </div>
        <button  className="signButton" type="button">Add Product</button>


       </div>
    )
}
export default AddCategory;