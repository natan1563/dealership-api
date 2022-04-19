const ClientModel = require('../Database/Models/Client')
const DateHelper = require('../Helpers/DateHelper')
const ClientService = require('../Services/ClientService')

class Client {
  async list() {
    return await ClientModel.findAll()
  }

  async create(data) {
    try {
      ClientService.setData(data)
      const clientData = ClientService.getData()
      clientData.created_at = DateHelper.getCurrentTimestamp()

      console.log(clientData)
      await ClientModel.create(clientData)

      return clientData
    } catch (e) {
      console.error(e.message)
    }
  }
}

module.exports = new Client