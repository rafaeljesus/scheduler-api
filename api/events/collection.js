'use strict'

const Promise = require('bluebird')
  , mongoose = Promise.promisifyAll(require('mongoose'))
  , Schema = mongoose.Schema

const Status = [
  'ACTIVE',
  'PAUSED'
]

const Event = Schema({
  url: {type: String, default: ''},
  cron: {type: String, default: ''},
  status: {type: String, enum: Status}
})

module.exports = mongoose.model('events', Event)
