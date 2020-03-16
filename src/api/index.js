const COVID19 = require('./api');
const PluginManager = require('./PluginManager');

module.exports = new PluginManager([COVID19]);
