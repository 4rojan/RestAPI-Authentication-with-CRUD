'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Password: {
        type : Sequelize.STRING,
        allowNull: false


      },
      Phone_Number: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      created_at: {
       
        type: Sequelize.BIGINT(50)
      },
      updated_at: {
        
        type: Sequelize.BIGINT(50)
      },
      uuid:{
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};