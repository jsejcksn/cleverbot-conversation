# cleverbot-conversation

Observe a Cleverbot conversation using Node.js

### Getting started

Nothing will work unless you first complete these two steps:

 1. Install the Cleverbot Node.js module by navigating to your repo directory in a terminal and running `npm install --save cleverbot.io`

 2. Generate your API name and key at [https://cleverbot.io/keys](https://cleverbot.io/keys) and then create a file called `api.js` in the root of your repo with the following content, replacing the ALL_CAPS variables with your API name and key:
 ```
 exports.user = 'YOUR_API_USERNAME';
 exports.key = 'YOUR_API_KEY';
 ```
 _The `api.js` file is ignored via `.gitignore`, so your private API info won't be uploaded to your forked repo._

In my testing, the Cleverbot API doesn't seem extremely reliable, so if you encounter errors, they might not be your fault. You can find more info at [https://docs.cleverbot.io/docs/getting-started](https://docs.cleverbot.io/docs/getting-started), which includes an API testing tool.

Use `node conversation.js` to begin the Cleverbot self-conversation. Use `node q.js 'YourQuestionHere'` to ask a single question directly in an interactive terminal session.
