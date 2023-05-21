import React, { useEffect }  from "react";
import {useNavigate} from 'react-router-dom'
import digital from './digital.jpg'


const Login=()=>{
    const [email,setEmail]= React.useState("");
    const [password,setPassword]=React.useState("");
    const navigate = useNavigate();

    //this component use to avoid access to different url without login
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })

    const handleLogin= async()=>{
        console.warn( " email,password",email, password);
        let result=  await fetch('http://localhost:5001/login',{
           method:'post',
           body: JSON.stringify({email,password}),
           headers:{
            'Content-Type':'application/json'
           },
        });
        result = await result.json()
        console.warn(result);
        if(result.auth){
           localStorage.setItem("user", JSON.stringify(result.user));
           localStorage.setItem("token", JSON.stringify(result.auth)); 

           navigate('/')
        }else{
            alert('No data found Please enter correct details Or Register 1st')
        }


    }

    return(
        
        <div className="register">
         <img className="registerimage" src={digital} alt="img" ></img>
               <h2>Welcome to DigitalFlake Admin</h2>

        <h1 className="signHeader">Login</h1>
        
        <input className="inputBox" type="email"
        value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
        
        <input className="inputBox" type="password" 
        value={password} onChange={(e)=>setPassword(e.target.value)}placeholder="Enter Password"/>
        
        <button onClick={handleLogin} className="signButton" type="button">Login</button>


       </div>
    )
}

export default Login;