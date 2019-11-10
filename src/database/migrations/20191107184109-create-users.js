module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false, // não vai ter usuário sem nome
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true, // não podemos ter e-mail repetido
    },
    password_hash: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    provider: {
      type: Sequelize.BOOLEAN,
      defaultValue: false, // por padrão todo usuário será um cliente e não prestador de serviço
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
    allowNull: false,
  }),

  down: (queryInterface) => queryInterface.dropTable('users'),
};
