import React,{useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import digital from './digital.jpg'

const SignUp =()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    // this is for hide signup link after login (private cop)
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })
   
    // this is foe accepting userObj from react 
    const userObj=async()=>{
        console.warn(name,email,password)
        let result=  await fetch('http://localhost:5001/register',{
           method:'post',
           body: JSON.stringify({name,email,password}),
           headers:{
            'Content-Type':'application/json'
           },
        });
        result = await result.json()
        console.warn(result);

        // this line is used to store data in local storage 
        localStorage.setItem("user",JSON.stringify(result.result));  
        localStorage.setItem("token",JSON.stringify(result.auth));   
        if(result){
            navigate('/')
        }
    
    }


    return(

       <div className="register">
       {/* <div className="bg-img"></div> */}
       <img className="registerimage" src={digital} alt="img" ></img>
       <h2>Welcome to DigitalFlake Admin</h2>
        <h1 className="signHeader">Register</h1>
        
        <input className="inputBox" type="text" 
        value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
        
        <input className="inputBox" type="email"
        value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
        
        <input className="inputBox" type="password" 
        value={password} onChange={(e)=>setPassword(e.target.value)}placeholder="Enter Password"/>
        
        <button onClick={userObj} type="submit" value="submit" className="signButton" >Signup</button>


       </div>
    )
}
export default SignUp;