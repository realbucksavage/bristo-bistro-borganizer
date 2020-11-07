require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.bot_token;
const commands = require("./cmd")

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`${bot.user.tag} ready!`);
});

bot.on('message', msg => {

    if (msg.author.bot) return;

    const expr = /(\!borganize)\s(role|p)\s(.*)/;
    const cmds = msg.content.match(expr);

    // Not a valid command format
    if (cmds == null) return;

    const c = commands[cmds[2]]

    if (!c) return

    try {
        c(msg, cmds[3]);
    } catch (e) {
        msg.author.send(`error go brrrrrrr\n${e}`)
    }
});
