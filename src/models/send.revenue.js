(async() => {

    const database = require('../database')
    const Revenue = require('./revenue')
    await database.sync()

})();