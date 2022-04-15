const ManufacturerModel = require('../Database/Models/Manufacturer')

class Manufacturer {
  async list() {
    return await ManufacturerModel.findAll({ raw: true })
  }

  async save(options) {
    await ManufacturerModel.create(options)
  }

  async getById(id) {
    return await ManufacturerModel.findOne({ where: { id }})
  }

  async change(id, values) {
    let updated = {}
    const hasUpdated = await ManufacturerModel.update(
      values,
      { where: { id } }
    )

    if (hasUpdated) {
      updated = await this.getById(id)
    }

    return updated
  }
}

module.exports = new Manufacturer