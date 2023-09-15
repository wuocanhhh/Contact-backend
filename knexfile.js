// Update with your config settings.
  require ('dotenv').config();
  // const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME} = process.env;
  
module.exports = {
  client: 'mysql',
  connection: {
    host :process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password: "",
    database:process.env.DB_NAME,
  },

   pool: {
      min: 0,
      max: 10
    },
    seeds:{
      directory: "./seeds",

    },
  };