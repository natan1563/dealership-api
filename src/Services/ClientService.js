const DateHelper = require('../Helpers/DateHelper')

class ClientService {
  constructor() {
    this.id = null
    this.name = null
    this.email = null
    this.password = null
    this.celphone = null
    this.rg = null
    this.cpf_cnpj = null
    this.person = null
    this.address_id = null
    this.created_at = null
    this.updated_at = null
  }

  setData(data) {
    try {
     const requiredFields = this.getRequiredFields()
     requiredFields.forEach((field) => {
      this[field] = data[field]
     })
    } catch (e) {
      console.log(e.message)
    }
  }

  getData(withId = false) {
    const clientData = {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      celphone: this.celphone,
      rg: this.rg,
      cpf_cnpj: this.cpf_cnpj,
      person: this.person,
      address_id: this.address_id,
      created_at: this.created_at,
      updated_at: DateHelper.getCurrentTimestamp()
    }

    if (!clientData.id || !withId) {
      delete clientData.id
    }

    return clientData
  }

  getRequiredFields() {
    return [
      'name',
      'email',
      'password',
      'celphone',
      'rg',
      'cpf_cnpj',
      'person',
      'address_id'
    ]
  }
}

module.exports = new ClientService()