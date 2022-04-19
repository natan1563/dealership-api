const moment = require('moment-timezone')

class DateHelper {
  static getCurrentTimestamp() {
    return moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')
  }
}

module.exports = DateHelper