const db = require('../models')

//creation d un model pricipal

const Product = db.product
const Review = db.reviews


//espace de traville

//1 . creation du porduit


const addProduct = async(req,res)=>{
      
    let info = {
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        published:req.body.published ? req.body.published:false
    }
     
const product = await Product.create(info)
res.status(200).send(product)

}

// . obtenir tout les produit de la table

const getAllProducts = async(req,res)=>{

 let products = await Product.findAll({})
 res.status(200).send(products)

}


// . obtenir un seul  produit de la table

const getOneProducts = async(req,res)=>{
                                      //ici la logique

    let id = req.params.id                               
    let products = await Product.findOne({where : {id:id}})
    res.status(200).send(products)
   
   }