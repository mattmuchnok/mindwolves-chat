'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
        password: bcrypt.hashSync('secret', 10),
        gender: 'male'
      },
      {
        firstName: 'Sam',
        lastName: 'Smith',
        email: 'sam.Smith@gmail.com',
        password: 'secret',
        gender: 'male'
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@gmail.com',
        password: 'secret',
        gender: 'female'
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Users', null, {});
  }
};
