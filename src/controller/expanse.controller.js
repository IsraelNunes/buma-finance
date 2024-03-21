const db = require("../models");
const Expanse = db.Expanse;
const Installments = db.Installments;

exports.createExpanse = (req, res) => {
    Expanse.create(req.body)
        .then((expanse)=>{
            function addMonths(date, months) {
                date.setMonth(date.getMonth() + months);
              
                return date;
              }              

            for (let index = 0; index < expanse.installments; index++) {
                const date = new Date(expanse.due_date);
                const newDate = addMonths(date, index);
                Installments.create({expanse: expanse.id, installment: expanse.installment, date: newDate, status: expanse.status});
                
            }
            res.status(201).json(expanse)
        })
        .catch((error)=>{
            console.log(error)
            res.status(500).json({error: "Cannot create expanse"});
        });
}

exports.findAllExpanses = (req, res) => {
    Expanse.findAll()
        .then((expanse)=>{
            res.status(200).json(expanse)
        })
        .catch((error)=>{
            console.log(error)
            res.status(500).json({error: "Error retriving expanses"});
        })
}


exports.findOneExpanse = async (req, res) => {
    console.log("funsiona")
    const id = req.params.id;
    const installments = await Installments.findAll({where: {expanse: id}})
    console.log("mami")
    Expanse.findByPk(id)
        .then((expanses) => {
            console.log("mimame")
            if (!expanses) {
                console.log("mamei")
                res.send(404).json({error: "Expanse not found"});
            }
            res.status(200).json({expanse: expanses, installments: installments});
        })
        .catch((error) => {
            res.status(500).json({error: "Error trying to retrieve Expanse"});
        })
}

exports.updateExpanse = (req, res) => {
  const id = req.params.id;

  Expanse.findByPk(id)
      .then((expanse) => {
          if(!expanse) {
              res.send(404).json({error: "legal expanse not found"});
          }
          expanse
          .update(req.body)
          .then((updatedExpanse) => {
              res.status(200).json(updatedExpanse)
          })
          .catch((error) => {
              res.status(500).json({error: "Error updating expanse"});
          })
      })
      .catch((error) => {
          res.status(500).json({error: "Error trying to retrive expanse"});
      })    
}

  
// (req, res) => {
//     const id = req.params.id;

//     Expanse.findByPk(id)
//         .then((expanse) => {
//             if(!expanse) {
//                 res.send(404).json({error: "legal expanse not found"});
//             }
//             expanse
//             .update(req.body)
//             .then((updatedExpanse) => {
//                 res.status(200).json(updatedExpanse)
//             })
//             .catch((error) => {
//                 res.status(500).json({error: "Error updating expanse"});
//             })
//         })
//         .catch((error) => {
//             res.status(500).json({error: "Error trying to retrive expanse"});
//         })    
// }

exports.deleteExpanse = async (req, res) => {
    const id = req.params.id;

    const installments = await Installments.findAll({where: {expanse: id}})
    for (let index = 0; index < installments.length; index++) {
        Installments.destroy({where: {id: installments[index].dataValues.id}})        
    }

    Expanse.destroy({where: {id: id}})
        .then(() => {
            res.status(200).json({message: "Expanse was deleted"});
        })
        .catch((error) => {
            res.status(500).json({error: "error trying to delete expanse"})
        })
}

//installments 

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