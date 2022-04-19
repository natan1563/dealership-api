const vehicleTable = require('./Models/Vehicle')
const manufacturerTable = require('./Models/Manufacturer')
const clientTable = require('./Models/Client')
const addressTable = require('./Models/Address')
const sellerTable = require('./Models/Seller')
const logTable = require('./Models/Log')
  
async function run() {
  await manufacturerTable
  .sync()
  .then(() => console.log('Manufacturer table has be created'))
  .catch((e) => console.error('Manufacturer table does\'nt be created', e.message))

  await addressTable
    .sync()
    .then(() => console.info('Address table created with successfuly'))
    .catch((e) => console.error('Cant be create address table'))

  await clientTable
    .sync()
    .then(() => console.log('Client table has be created'))
    .catch((e) => console.error('Client table does\'nt be created', e.message))

  await vehicleTable
    .sync()
    .then(() => console.log('Vehicle table has be created'))
    .catch((e) => console.error('Vehicle table does\'nt be created', e.message))

  await sellerTable
    .sync()
    .then(() => console.info('The Seller table has be created'))
    .catch((e) => console.error('Ops! Cant be create seller table', e.message))

  await logTable
    .sync()
    .then(() => console.info('The Log table has be created'))
    .catch((e) => console.error('Ops! Cant be create Log table', e.message))
}

run()