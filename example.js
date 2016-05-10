var api = require('./api.js');
var cleverbot = require("cleverbot.io");
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
bot = new cleverbot(api.user, api.key); // cleverbot (user, key, nick)

// bot.setNick("YOUR_NICK"); // This is optional
bot.create(function(err, response) {
  rl.setPrompt('You> ');
  rl.prompt();
  rl.on('line', function(input) {
    bot.ask(input, function(err, response) {
      if (err) throw response;
      console.log("Cleverbot:", response);
      rl.prompt();
    });
  }).on('close', function() {
    process.exit(0);
  });
});
