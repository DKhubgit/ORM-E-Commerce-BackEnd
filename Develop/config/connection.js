require('dotenv').config();

const Sequelize = require('sequelize');

//This will either connect to localhost or in heroku
const sequelize = process.env.JAWSDB_URL //database provided in HEROKU
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
