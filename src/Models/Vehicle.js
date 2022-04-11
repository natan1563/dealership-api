const VehicleModel = require('../Database/Models/Vehicle')

class Vehicle {
  async list() {
    return await VehicleModel.findAll()
  }

  async getById(id) {
    return await VehicleModel.findOne({ where: { id }})
  }

  async create(data) {
    await VehicleModel.create(data)
  }

  async change(id, data) {
    let updated = {}
    const isUpdated = await VehicleModel.update(data, {where: { id }})

    if (isUpdated) {
      updated = await this.getById(id)
    }

    return updated
  }

  async remove(id) {
    await VehicleModel.destroy({where: { id }})
  }
}

module.exports = new Vehicle