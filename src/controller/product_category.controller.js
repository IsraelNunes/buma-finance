const db = require('../models/');
const Product_Category = db.Product_Category;

//create

exports.createProduct_Category = (req, res) => {
    Product_Category.create(req.body)
        .then(Product_Category => {
            res.status(201).json(Product_Category);
        })
        .catch(error => {
            res.status(500).json({error: 'Error creating Product Category'});
        });
};

//retrieve

exports.getAllProduct_Categories = (req, res) => {
    Product_Category.findAll()
        .then(Product_Category => {
            res.status(200).json(Product_Category);
        })
        .catch(error => {
            res.status(500).json({error: "Error retrieving product categories"})
        });
};

exports.getProduct_CategoryByID = (req, res) => {
    const id = req.params.id;
  
    Product_Category.findByPk(id)
      .then(category => {
        if (!category) {
          return res.status(404).json({ error: 'Product Category not found' });
        }
        res.status(200).json(category);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving product category' });
      });
  };

//update

exports.updateProduct_category = (req, res) => {
    const id = req.params.id;
    Product_Category.update({where: {id: id} })
        .then(() => {
            res.status(204).json({ message: 'Product category deleted'});
        })
        .catch(error => {
            res.status(500).json({error: "Error updating product category"});
        })
}

//delete

exports.deleteProduct_category = (req, res) => {
    const id = req.params.id;
    Product_Category.destroy({where: {id: id} })
        .then(() => {
            res.status(204).json({ message: 'Product category deleted'});
        })
        .catch(error => {
            res.status(500).json({error: "Error deleting product category"});
        })
}