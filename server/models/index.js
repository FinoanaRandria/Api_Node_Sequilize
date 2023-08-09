const dbConfig = require('../config/dbConfig')

const {Sequelize,DataTypes} = require('sequelize')

const sequilize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases:false,
        
             pool:{

                max:dbConfig.pool.max,
                min:dbConfig.pool.min,
                acquire:dbConfig.pool.acquire,
                idle:dbConfig.pool.idle
             }
    }
)

sequilize.authenticate()
.then(() =>{
     console.log('connected');
})
.catch(err=>{
     console.log('Error' + err);
})


const db = {}

db.Sequilize = Sequelize
db.sequilize = sequilize


//la table
db.product = require('./productModels.js')(sequilize,DataTypes)
db.reviews = require('./reviewModels.js')(sequilize,DataTypes)


//pour ne pas creer la table encore et encore si elle n est pas trouve
db.sequilize.sync({force:false})
.then(()=>{
      console.log('yes re-sync done');
})


module.exports = db