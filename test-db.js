const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodetodo', 'sa', 'admin123', {
    host: 'localhost',
    dialect: 'mssql',
    port: '1434',
  });
  
  async function start() {
    
    const result = await sequelize.authenticate();
    console.log(result);

 }
  
  try {
     start();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }