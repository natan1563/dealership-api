const vehicleTable = require('./Models/Vehicle')
const manufacturerTable = require('./Models/Manufacturer')
const clientTable = require('./Models/Cliente')
const addressTable = require('./Models/Address')
const sellerTable = require('./Models/Seller')

vehicleTable
  .sync()
  .then(() => console.log('Vehicle table has be created'))
  .catch((e) => console.error('Vehicle table does\'nt be created', e.message))
  
manufacturerTable
  .sync()
  .then(() => console.log('Manufacturer table has be created'))
  .catch((e) => console.error('Manufacturer table does\'nt be created', e.message))

clientTable
  .sync()
  .then(() => console.log('Cliente table has be created'))
  .catch((e) => console.error('Cliente table does\'nt be created', e.message))

addressTable
  .sync()
  .then(() => console.info('Address table created with successfuly'))
  .catch((e) => console.error('Cant be create address table'))

sellerTable
  .sync()
  .then(() => console.info('The Seller table has be created'))
  .catch((e) => console.error('Ops! Cant be create seller table', e.message))