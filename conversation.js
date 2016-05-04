var api = require('./api.js');
var cleverbot = require("cleverbot.io"),
  bot = new cleverbot(api.user, api.key);

// bot.setNick("a");
// bot.setNick("b");

// bot.create(function (err, session) {
//   // session is your session name, it will either be as you set it previously, or cleverbot.io will generate one for you
//
//   // Woo, you initialized cleverbot.io.  Insert further code here
// });

// bot.ask("Just a small town girl", function (err, response) {
//   console.log(response); // Will likely be: "Living in a lonely world"
// });
