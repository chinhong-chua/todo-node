module.exports = {
    HOST: "localhost",
    PORT: "1434",
    USER: "sa",
    PASSWORD: "admin123",
    DB: "nodetodo",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };