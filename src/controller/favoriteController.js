const favoriteModel = require("../models/favorite");

const favoriteCreate = async (req,res) => {
    res.send("favoritoCreado");
    const{mark,models,price} = req.body 

    const newFav = new favoriteModel({
        mark,
        models,
        price
    })
    try {
        const favProduct = await newFav.save();
        return res.status(200).send(favProduct);
    } catch (error) {
        console.log(error);
        res.status(404).send({msg:"no entro"})
    }
    console.log(req.body);
}




module.exports={
    favoriteCreate,
}