const db = require("../models");
const Revenues = db.Revenues;
const Installments = db.Installments;

exports.createRevenue = (req, res) => {
    Revenues.create(req.body)
        .then((revenues) => {
            function addMonths(date, months) {
                date.setMonth(date.getMonth() + months);
              
                return date;
              }              

            for (let index = 0; index < revenues.installments; index++) {
                const date = new Date(revenues.due_date);
                const newDate = addMonths(date, index);
                Installments.create({revenue: revenues.id, installment: revenues.installment, date: newDate, status: false});
                
            }
            res.status(201).json(revenues);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({error: 'Error creating Revenue'});
        })
}

exports.getAllRevenues = (req, res) => {
    Revenues.findAll()
        .then((revenues) => {
            res.status(200).json(revenues);
        })
        .catch((error) => {
            res.status(500).json({error: 'Error getting Revenue'});
            console.log(error)
        })
}

exports.getRevenuesByID = async (req, res) => {
    const id = req.params.id;
    const installments = await Installments.findAll({where: {revenue: id}})

    Revenues.findByPk(id)
        .then((revenues) => {
            if (!revenues) {
                res.send(404).json({error: "Revenues not found"});
            }
            res.status(200).json({revenues: revenues, installments: installments});
        })
        .catch((error) => {
            res.status(500).json({error: "Error trying to retrieve Revenue"});
        })
}

exports.updateRevenue = async (req, res) => {
    const id = req.params.id;

    try {
        const revenue = await Revenues.findByPk(id);
        
        if (!revenue) {
            return res.status(404).json({ error: "Revenue not found" });
        }
        
        const updatedRevenue = await revenue.update(req.body);
        console.log(req.body)
        return res.status(200).json(updatedRevenue);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error updating Revenue" });
    }
    
}

exports.deleteRevenue = async (req, res) => {
    const id = req.params.id;

        
    const installments = await Installments.findAll({where: {revenue: id}})
    for (let index = 0; index < installments.length; index++) {
        Installments.destroy({where: {id: installments[index].dataValues.id}})        
    }
    Revenues.destroy({where : {id : id}})
        .then(()=>{
            res.status(200).json({message: "Revenue was deleted"});
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({message: "Error deleting Revenue"})
        })
}

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