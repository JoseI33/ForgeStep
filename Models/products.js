const mongoose = require ('mongoose')
mongoose.set('strictQuery', true);



const ProductoSchema = mongoose.Schema({
    ProductName:{
        type:String,
        require: true,
        unique: true,
        minLength: 1,
        maxLength:50,

    },
    PriceProduct:{
        type: Number,
        required:true,
    },
    ImgURL:{
        type: String,
        required:true,
    },
    Category:{
        type: String,
        required:true,
        minLength: 5,
        maxLength:100,
    },
    StockProduct:{
      type: Number,
      required:true,
  },
    Productdetalle:{
        type:String,
        required: true,
        minLength: 5,
        maxLength:100,

    },
})


 module.exports = mongoose.model("Producto",ProductoSchema )