const knex = require("../database/knex");
const Paginator = require("./paginator");

function makeContactsService() {
  // Read contact (get file json)
  function readContact(payload) {
    const contact = {
      name: payload.name,
      email: payload.email,
      address: payload.address,
      phone: payload.phone,
      favorite: payload.favorite,
    };

    Object.keys(contact).forEach(
      (key) => contact[key] === undefined && delete contact[key]
    );
    return contact;
  }
  //  create a contact
  async function createContact(payload) {
    const contact = readContact(payload);
    const [id] = await knex("contacts").insert(contact);
    return { id, ...contact };
  }

  // get many contacts
  async function getManyContacts(query) {
    const { name, favorite, page = 1, limit = 5 } = query;
    const paginator = new Paginator(page, limit);

    // return all contact by json
    // return number of pages and limit on a page.
    let results = await knex("contacts")
      .where((builder) => {
        if (name) {
          builder.where("name", "like", `%${name}%`);
        }
        if (favorite !== undefined) {
          builder.where("favorite", 1);
        }
      })
      .select(
        knex.raw("count(id) OVER() AS recordsCount"),
        `id`,
        `name`,
        `email`,
        `address`,
        `phone`,
        `favorite`
      )
      .limit(paginator.limit)
      .offset(paginator.offset);

    let totalRecords = 0;
    results = results.map((result) => {
      totalRecords = result.recordsCount;
      delete result.recordsCount;
      return result;
    });

    return {
      metadata: paginator.getMetadata(totalRecords),
      contacts: results,
    };
  }

  // get contact by id
  async function getContactById(id) {
    return knex("contacts").where("id", id).select("*").first();
  }

  async function updateContact(id, payload) {
    const update = readContact(payload);
    return knex(`contacts`).where("id", id).update(update);
  }

  async function deleteContact(id) {
    return knex(`contacts`).where("id", id).del();
  }

  async function deleteAllContact() {
    return knex(`contacts`).del();
  }

  return {
    createContact,
    getManyContacts,
    getContactById,
    updateContact,
    deleteContact,
    deleteAllContact,
  };
}

module.exports = makeContactsService;
