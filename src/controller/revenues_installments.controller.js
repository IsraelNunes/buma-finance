const db = require('../models');
const Revenues = db.Revenues;
const Installments = db.Installments;

//installments 
exports.getAllInstallments = (req, res) => {
    console.log("penes")
    Installments.findAll()
        .then((installments) => {
            res.status(200).json(installments);
        })
        .catch((error) => {
            res.status(500).json({error: 'Error getting Installments'});
            console.log(error)
        })
  }
  
  exports.updateInstallment = (req, res) => {
      const installmentId = req.params.id;
    
      Installments.findByPk(installmentId)
        .then(installment => {
          if (!installment) {
            return res.status(404).json({ error: 'Installment not found' });
          }
          console.log("penes")
          installment
            .update(req.body)
            .then(updatedInstallment => {
              res.status(200).json(updatedInstallment);
            })
            .catch(error => {
              console.error(error);
              res.status(500).json({ error: 'Error updating installment' });
            });
        })
        .catch(error => {
          console.error(error);
          res.status(500).json({ error: 'Error retrieving installment' });
        });
    };
  
    exports.deleteInstallment = (req, res) => {
      const installmentId = req.params.id;
    
      Installments.findByPk(installmentId)
        .then(installment => {
          if (!installment) {
            return res.status(404).json({ error: 'Installment not found' });
          }
    
          installment
            .destroy()
            .then(() => {
              res.status(204).json({message: "Installment deleted"}); 
            })
            .catch(error => {
              console.error(error);
              res.status(500).json({ error: 'Error deleting installment' });
            });
        })
        .catch(error => {
          console.error(error);
          res.status(500).json({ error: 'Error retrieving installment' });
        });
    };