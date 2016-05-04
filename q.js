var args = process.argv.slice(2);
var api = require('./api.js');
var cleverbot = require("cleverbot.io"),
  bot = new cleverbot(api.user, api.key);

bot.ask(args[0], function(err, response) {
  console.log(response);
});
