const db = require("../models");
const Installments = db.Installments;

exports.createInstallment = (req, res) => {
    Installments.create(req.body)
      .then(installment => {
        res.status(201).json(installment);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Error creating installment' });
      });
  };
  
  exports.getAllInstallments = (req, res) => {
    Installments.findAll()
      .then(installments => {
        res.status(200).json(installments);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving installments' });
      });
  };
  
  exports.getInstallmentById = (req, res) => {
    const installmentId = req.params.id;
  
    Installments.findByPk(installmentId)
      .then(installment => {
        if (!installment) {
          return res.status(404).json({ error: 'Installment not found' });
        }
        res.status(200).json(installment);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving installment' });
      });
  };
  
  exports.updateInstallment = (req, res) => {
    const installmentId = req.params.id;
  
    Installments.findByPk(installmentId)
      .then(installment => {
        if (!installment) {
          return res.status(404).json({ error: 'Installment not found' });
        }
  
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