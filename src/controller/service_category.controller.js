const db = require('../models/');
const Service_Category = db.Service_Category

//create

exports.createService_Category = (req, res) => {
    Service_Category.create(req.body)
        .then((services) => {
            res.status(201).json(services);
        })
        .catch(error => {
            res.status(500).json({error: 'Error creating Service Category'});
        });
};

//retrieve

exports.getAllService_Category = (req, res) => {
    Service_Category.findAll()
        .then(services => {
            res.status(200).json(services);
        })
        .catch(error => {
            res.status(500).json({error: "Error retrieving Service services"})
        });
};

exports.getService_CategoryByID = (req, res) => {
    const id = req.params.id;
  
    Service_Category.findByPk(id)
      .then((category) => {
        if (!category) {
          return res.status(404).json({ error: 'Service Category not found' });
        }
        res.status(200).json(category);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving Service category' });
      });
  };

//update

exports.updateService_Category = (req, res) => {
    const id = req.params.id;
  
    Service_Category.findByPk(id)
      .then(category => {
        if (!category) {
          return res.status(404).json({ error: 'Service Category not found' });
        }
  
        // Update category data based on the request body
        category
          .update(req.body)
          .then(updatedCategory => {
            res.status(200).json(updatedCategory);
          })
          .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Error updating Service category' });
          });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving Service category' });
      });
  };

//delete

exports.deleteService_category = (req, res) => {
    const id = req.params.id;
    Service_Category.destroy({where: {id: id} })
        .then(() => {
            res.status(204).json({ message: 'Service category deleted'});
        })
        .catch(error => {
            res.status(500).json({error: "Error deleting Service category"});
        })
}