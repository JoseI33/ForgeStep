const Product = require('../models/user');


// GET PRODUCTS

const getProducts = async(req, res)=>{
  try {
    const marca = req.query.marca ? { marca: req.query.marca } : {}
    const productList = await Product.find(marca);
    if (!productList) return res.status(404).json({ msg: 'Error no encontramos los productos'});
    res.status(200).json(productList)
  } catch (error) {
    res.status(500).json({msg:'Error, no se pudo realizar la conexion a la base de datos'})
  }
}

// CREATE PRODUCT

const createProducts = async(req, res)=>{

  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({
      message: "El producto se creo correctamente",
      product: newProduct
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al crear el producto",
    });
  }
};

// GET ONE PRODUCT

const findProduct = async(req, res)=>{
  try {
    console.log(req.params)
    const productFound = await Product.findById(req.params.id);
    if (!productFound) return res.status(404).json({ msg: 'Error no encontramos el producto solicitado'});
    return res.status(200).json(productFound);
  } catch (error) {
    res.status(500).json({
      msg:'Error, no se pudo realizar la conexion a la base de datos'
    })
  }

}


// UPDATE PRODUCT

const updateProducts = async(req, res)=>{
  try {
    // await Product.findByIdAndUpdate(req.params.id, { ...req.body });req.params.id, req.body
    await Product.findByIdAndUpdate(req.params.id, req.body); 
    res.status(200).json({
      mensaje: "El producto fue editado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error el prudcto solicitado no pudo ser modificado",
    });
  }
};


// DELETE PRODUCT

const deleteProducts = async(req, res)=>{
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({
        mensaje: 'El producto fue correctamente eliminado'
    });
  }
  catch(error){
    console.log(error)
    res.status(404).json({
      mensaje: 'Error. El producto solicitado no pudo ser eliminado.'
    });
  }
};




module.exports = {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
  findProduct,
};