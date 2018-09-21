var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !add
            case 'add':
                bot.sendMessage({
                    to: channelID,
                    message: 'hmm?'
                });
	   break;
            // !help
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'I am a bot used for having conversations and fun you may speak to many time you like. if i dont respond to a certaint statment that means i have not learned it yet. dont be afraid to contact my creator about adding a statment.'
                });
	   break;
            // !addyouaregay
            case 'addyouaregay':
                bot.sendMessage({
                    to: channelID,
                    message: 'i know i am gay but not as much as ain bot he is even gayer'
                });
	   break;
            // !iwanttodie
            case 'iwanttodie':
                bot.sendMessage({
                    to: channelID,
                    message: 'please do not die unless you have a logical reason to like idk being rejected by life.'
                });
	   break;
            // !yom
            case 'yom':
                bot.sendMessage({
                    to: channelID,
                    message: 'YUMMY'
                });
	   break;
            // !howareyouadd
            case 'howareyouadd':
                bot.sendMessage({
                    to: channelID,
                    message: 'im doing good how about you?'
                });
	   break;
            // !bby
            case 'bby':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hello kuroha what does you need :3'
                });
	   break;
            // !pureboy
            case 'pureboy':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://i.pinimg.com/originals/9c/27/6f/9c276fc23cd2af69cf9ce214ecc22e2b.jpg *smiles* '
                });
	   break;
            // !hurt
            case 'hurt':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://pbs.twimg.com/profile_images/961457834826305536/YSzbpgL6_400x400.jpg'
                });
	   break;
       // !heart
            case 'heart':
                bot.sendMessage({
                    to: channelID,
                    message: 'http://pm1.narvii.com/6741/a60b90df33a5dfb3d4fc235aeecdd65a1b71c2d0v2_00.jpg'
                });
	   break;
            // !poke
            case 'poke':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://pbs.twimg.com/media/DjuO1cTVsAARDhc.jpg p-please dont poke me >_<'
                });
	   break;
            // !addareyouok?
            case 'addareyouok?':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://vignette.wikia.nocookie.net/p__/images/8/85/Add-mad_paradox_true_form.png/revision/latest?cb=20180208200654&path-prefix=protagonist NO IM NOT OK!!'
                });
	   break;
         }
     }
});


client.login(process.env.BOT_TOKEN);
