const vehicleTable = require('./Migrations/Vehicle')
const manufacturerTable = require('./Migrations/Manufacturer')
const clientTable = require('./Migrations/Cliente')

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