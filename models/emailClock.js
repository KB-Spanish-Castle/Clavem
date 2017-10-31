var moongoose = require('mongoose');

var ClockSchema = new moongoose.Schema({
  
  lastUpdate: { type: Date, default: Date.now },

});
module.exports = moongoose.model('lastUpdate', ClockSchema);