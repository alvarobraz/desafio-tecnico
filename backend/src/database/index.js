import Sequelize from 'sequelize';

// import mongoose from 'mongoose';
import User from '../app/models/User';
import File from '../app/models/File';
import Customer from '../app/models/Customer';
import databaseConfig from '../config/database';

const models = [User, File, Customer];

class Database {
  constructor() {
    this.init();
    // this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
