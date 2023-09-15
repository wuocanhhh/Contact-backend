const { faker } = require("@faker-js/faker");

function createContact() {
  return {
    name: faker.person.fullname,
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
    phone: faker.phone.number("09########"),
    favorite: faker.number.int({
      min: 0,
      max: 1,
    }),
  };
}

/**""
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("contacts").del();
  await knex("contacts").insert(Array(100).fill().map(createContact));
};
