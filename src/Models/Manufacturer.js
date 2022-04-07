const ManufacturerModel = require('../Database/Models/Manufacturer')

class Manufacturer {
  async list() {
    return await ManufacturerModel.findAll({ raw: true })
  }

  async save(options) {
    await ManufacturerModel.create(options)
  }
}

module.exports = new Manufacturer