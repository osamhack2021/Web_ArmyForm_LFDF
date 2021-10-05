import { Sequelize } from 'sequelize';

// TODO: Set database, username, password by process.env
const database = 'test';
const username = 'test';
const password = 'test';

const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: true
  }
);

// TODO: Remove force sync after database initialized and dockerized.
sequelize.sync({ force: true });

export default sequelize;
