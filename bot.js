const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
console.log('HexBot Online!');
bot.user.setGame("MORE COMING SOON, SAY "!help" FOR HELP");
});

client.on('message', message () => {
 if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
   if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  
    if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
  
  if(command === "help") {
  return.message.author.send("The Help section is coming soon, for now welcome to Hex Studios!");
  }
});
client.login(process.env.token);
