const mongoose = require ('mongoose');

const productSchema= new mongoose.Schema({
    category: String,
    productName: String,
    PackSize:String,
    mrp:String,
    productImg: String,
    status:String
});

module.exports = mongoose.model("product",productSchema);
