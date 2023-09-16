const express = require('express')
const router = express.Router();
const productsController = require('../controller/productsController');

//Recuros:
//Recursos para obtener los productos:
router.get('/', productsController.getProducts)
//Recursos para crear los productos:
router.post('/', productsController.createProducts)
//Recursos para editar los productos:
router.put('/:id', productsController.updateProducts)
//Recursos para borrar los productos:
router.delete('/:id', productsController.deleteProducts)
//Recursos para buscar los productos:
router.get('/:id', productsController.findProduct)

module.exports = router;
