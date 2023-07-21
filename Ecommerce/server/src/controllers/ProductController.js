const Product = require('../model/product')

class ProductController {

    //Get All Products
     async get(req, res) {
          try {
               const products = await Product.find(req.query)
               res.status(200).json({ products })
          } catch (error) {
               console.log(error);
               res.status(500).json({ message: "Internal Server Error" })
          }
     }

     //Get a product by slug
     async show(req, res) {
          try {
               const product = await Product.findOne({ slug: req.params.slug })
               res.status(200).json(product)
          } catch (error) {
               console.log(error);
               res.status(500).json({ message: "Internal Server Error" })
          }
     }

    //Post create new product
     async create(req, res) {
          try {
               const formData = req.body
               const product = await Product.create(formData)
               res.status(200).json(product)
          } catch (error) {
               console.log(error)
               res.status(500).json({ message: "Internal Server Error" })
          }
     }

    //Put update a product
     async update(req,res) {
          try {
               const updateProduct = await Product.updateOne(req.params._id, req.body);
               res.status(200).json(updateProduct);
          } catch (error) {
               console.log(error);
               res.status(500).json({ message: "Internal Server Error" });
          }
     }

     //DEL delete a product
     async delete(req,res) {
          try {
               const deletedProduct = await Product.deleteOne(req.params._id);
               res.status(200).json(deletedProduct);
          } catch (error) {
               console.log(error);
               res.status(500).json({ message: "Internal Server Error" });
          }
     }
}

module.exports =  new ProductController()