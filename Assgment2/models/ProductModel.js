var mongoose = require('mongoose')
var ProductSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            require
        },
        Brand: {
            type: String,
            require
        },
        Price: {
            type: Number,
            require
        },
        Image: String,
        quantity: Number
    }
)
var ProductModel = mongoose.model('product', ProductSchema, 'product');
module.exports=ProductModel