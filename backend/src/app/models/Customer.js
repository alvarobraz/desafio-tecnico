import Sequelize, { Model } from 'sequelize';
// import bcrypt from 'bcryptjs';

class Customer extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        telefone: Sequelize.STRING,
        cep: Sequelize.STRING,
        logradouro: Sequelize.STRING,
        bairro: Sequelize.STRING,
        localidade: Sequelize.STRING,
        uf: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }
}

export default Customer;
