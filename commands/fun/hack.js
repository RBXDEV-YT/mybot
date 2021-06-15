const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "hack",
  aliases: [],
  description: "Hack a Member!",
  usage: "Hack <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    if (!Member)
      return message.channel.send(
        `Please Mention A Member That You Want To hack!`
      );

    if (Member.user.id === message.author.id)
      return message.channel.send(`Why would you even try that??`);

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Hacked`)
      .setDescription(
        `Name: ${Member.user.username} | ID: ${
          Member.user.id
        }`
      )
      .setFooter(`User Cant log in to discord`)
      .setTimestamp();

    await message.channel.send(`Hacking Started! Hacking ${Member.user.username}`);

    await message.channel.send(`10%`);

    await message.channel.send(`20%`);

    await message.channel.send(`30%`);

    await message.channel.send(`40%`);

    await message.channel.send(`50%`);

    await message.channel.send(`60%`);

    await message.channel.send(`70%`);

    await message.channel.send(`80%`);

    await message.channel.send(`90%`);

    setTimeout(function() {
      message.channel.send(embed);
    }, 5000);

    //End
  }
};