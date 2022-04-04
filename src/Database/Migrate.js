const vehicleTable = require('./Migrations/Vehicle')

vehicleTable
  .sync()
  .then(() => console.log('Vehicle table has be created'))
  .catch((e) => console.error('Vehicle table does\'nt be created', e.message))