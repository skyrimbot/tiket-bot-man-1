const Discord = require("discord.js");
const fs = require("fs");
const color = JSON.parse(fs.readFileSync(`Storage/color.json`, `utf8`));

exports.run = async (bot, message, args, functions) => {

    if (message.content === '1help') {
        message.react('✅');
    } 

let embed = new Discord.MessageEmbed()

   .setTitle(`Moderator-Commands༺═───────────────────═༻,''`)
   .setDescription(``)
   .setColor(`#1f35b1`)
   .addField("```✅setlogs```", "Az In Command Baraye Set Kardan Log Dar Channel Khod Estefade Konid ```||1setlogs||```", false)
   .addField("```🎫Making ticket```", "Az Command Baraye Sakhtane Ticket Estefade Konid ```||1ticket||```",false )
   .addField("```📪close```", "Az In Command Baraye Delete Kardan Ya Bastane Har Ticket Anjam Bedid ```||1close||```", false)
   .addField("```**kick**```", "Az In Command Baraye kick Kardan estefade konid```||1kick||```", false)
   .addField("```**ban**```", "Az In Command Baraye ban Kardan estefade konid```||1ban||```", false)
   .addField("```**mute**```", "Az In Command Baraye mute Kardan estefade konid```||1mute||```", false)
   .addField("```**unmute**```", "Az In Command Baraye mute Kardan estefade konid```||1unmute||```", false)
   .addField("```**clear**```", "Az In Command Baraye pak  Kardan messaeg ha estefade konid```||1clear||```", false)


   .setFooter("༺═───────────────────═༻༺═───────────────────═༻")
   
   return message.channel.send(embed);


}
exports.help = {
    name: "help",
}