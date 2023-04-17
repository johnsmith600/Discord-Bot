// make a discord moderation bot
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
const prefix = config.prefix;
const token = config.token;
const owner = config.owner;
const version = config.version;
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'ping') {
        message.channel.send('Pong!');
    } else if (command === 'botinfo') {
        message.channel.send(`My prefix is ${prefix}`);
    } else if (command === 'serverinfo') {
        message.channel.send(`My prefix is ${prefix}`);
    } else if (command === 'invite') {
        message.channel.send(`My prefix is ${prefix}`);
    } else if (command === 'help') {
        message.channel.send(`My prefix is ${prefix}`);
    } else if (command === 'info') {
        message.channel.send(`My prefix is ${prefix}`);
    } else if (command === 'server') {
        message.channel.send(`My prefix is ${prefix}`);
    }
});

client.login(token);