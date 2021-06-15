const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "clearwarns",
  aliases: ["del-warns", "clearwarnigs"],
  description: "remove A Users warnings",
  usage: "clearwarns <Mention User>",
  run: async (client, message, args) => {
    //Start
    message.delete();
if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        `You cant use this command. If this is a mistake contact the owner`
      );
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`Please Mention A User!`);

    let Reason = args.slice(1).join(" ");

    client.db.delete(`Warnings_${message.guild.id}_${Member.user.id}`, 1);

    let Warnings = client.db.get(
      `Warnings_${message.guild.id}_${Member.user.id}`
    );

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Succsefuly cleared all warnings of of ${Member.user.tag}`)
      .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
      .addField(`Targeted member`, `${Member.user.tag} (${Member.user.id})`)
      .addField(`Now Member Warnings`, Warnings)
      .setfooter(`Coded by RBxDEV_YT`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
