(async () => {

  const database = require('./connectionDB')
  await database.sync();
  const expanse = require('./models/expanse')

  const newExpanse = await expanse.create({
    expanse_name: 'Agua'
  })
  console.log(newExpanse)
})();