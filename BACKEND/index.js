const express = require('express');
const cors = require("cors");
require ('./DB/config');
const User = require("./DB/User");
const Product = require("./DB/AddProducts");

const Jwt = require ('jsonwebtoken');
const jwtKey='shubham';


const app = express();
app.use(express.json());
app.use(cors());

//register API
app.post("/register",async (req,resp)=>{
    let user=new User(req.body);
    let result = await user.save();
    //this two line of code written to hide password in 
    result = result.toObject();
    delete result.password
    Jwt.sign({ result }, jwtKey, {expiresIn:"3h"},(err, token) =>{
        if (err){
           resp.send({result: "some thing is wrong "})
        }
        resp.send({ result, auth: token});
  });
})

//login API
app.post("/login", async (req,resp)=>{
    console.log(req.body)
    if(req.body.email && req.body.password){
        let user = await User.findOne(req.body).select('-password');
        if(user){
            Jwt.sign({ user }, jwtKey, {expiresIn:"3h"},(err, token) =>{
                  if (err){
                     resp.send({result: "some thing is wrong "})
                  }
                  resp.send({ user, auth: token});
            });
            
        }else{
            resp.send({result:'NO ENTRY PRESENT'});
        }
    }else{
        resp.send({result:'NO ENTRY PRESENT'});
    }    
})

//Add Product API
app.post("/add-product",async (req,resp)=>{
    let product =new Product(req.body);
    let result = await product.save();
    resp.send(result);
})

//List /Show Product API
app.get("/products",async (req,resp)=>{
    let products = await Product.find();
    if(products.length>0){
        resp.send(products);
    }else{
        resp.send({result:"No Products Found"});
    }
});

app.delete ("/product/:id", async(req,resp)=>{
    const result = await Product.deleteOne({_id:req.params.id})
    resp.send(result);
});


// app.delete("/product/:id", async (req,resp)=>{
//     const result = await Product.deleteOne({_id:req.params.id})
//     resp.send(result);
// });


function verifyToken(req, resp, next){
    let token = req.headers['autorization'];
    if(token) {
        token = token.split(' ')[1];
        Jwt.verify(token,jwtKey,(err,valid)=>{
            if (err){
                resp.status(401).send({result: "Please provide Valid Token"});
            }else{
                next();
            }

        })
    }else{
        resp.status(403).send({result: "Please add token with header"})
    }
}


app.listen(5001);

