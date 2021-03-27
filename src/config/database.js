/*
|--------------------------------------------------------------------------
| Database Connection
|--------------------------------------------------------------------------
|
| Setup connection to PostgreSqL
|
*/

import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  process.env.PG_DATABASE,
  process.env.PG_USERNAME,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: 'postgres',
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

export { sequelize };
