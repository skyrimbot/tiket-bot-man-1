const Discord = require("discord.js");
const config = require("./Storage/config.json");

const bot = new Discord.Client({
    disableEveryone: true,
    autoReconnect: true,
    disabledEvents: ["TYPING_START"],
    partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION']
});

const activities_list = [
    "Coded By ab_n0y0u#1370", 
    "Ticket,Management",
    "Use: 1help",
   ]; 

bot.on('ready', () => {
    console.log(`Bot Amade Shod!`);
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        bot.user.setActivity(activities_list[index]); 
    }, 100000); 
})


bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.event = new Discord.Collection();

const loadCommands = require("./functions/commands.js");
const loadEvents = require("./functions/events.js");

const load = async () => {
    await loadCommands.run(bot);
    await loadEvents.run(bot);
}

load();





//____________________________________________________________________________________________

//____________________________________________________________________________________________
bot.on('message', message => {
if (message.content.startsWith("1ban")) {
 if (message.member.hasPermission("BAN_MEMBERS")) {
 let member = message.mentions.members.first()
 if (!member) message.channel.send("Lotfan Yek Nafar Ra Tag/Ping Konid")
 else {
 member.ban().then(mem => {
 message.channel.send(`Bn shod User: ${mem.user.username}!`)
 })
 }
 } else {
 message.reply("Shoma Permission In Kar Ra Nadarid")
 }
 }

})
//____________________________________________________________________________________________
bot.on('message', message => {
if(message.content.startsWith("1clear")){
let arg = message.content.split(" ")
if(message.member.hasPermission("MANAGE_MESSAGES")) {
let clear = arg[1];
if(!clear) return message.channel.send("Lotfan Benevisid Cheghadr Payam Ra Mikhahid Pak Konam    Mesal : !clear 20")
if(isNaN(clear)) return message.channel.send(":x: | Please Put a Valid Number to Clear messages.")
if(clear > 100) return message.channel.send(":x: | can't Clear more than 100 messages.")
if(clear < 1) return message.channel.send("ou cannot Clear less than 1 message.")
 
message.channel.bulkDelete(clear)
message.channel.send("Command Clear Ba Movafaghiat Anjam Shod :sweat_smile:")
.then(message => 
 message.delete({timeout: 10000})
 )
}else{
message.reply("You dont have perms!")
}
}
})
//____________________________________________________________________________________________
 bot.on('message', message => {
if (message.content === "1ping") {
message.channel.send(`⏱| **${ bot.ws.ping}ms** Latency!`)}
})
 bot.on('message', message => {
if(message.content.startsWith("1mute")) {
 if(message.member.hasPermission("ADMINISTRATOR")) { //role mored niyaz 
 let member = message.mentions.members.first()
 if(!member) message.channel.send("Lotfan Yek Nafar Ra Tag/Ping Konid")
 else {
 member.roles.add("903741212454957136")
 message.channel.send("Member Ba Movafaghiat Mute Shod")
 }

 }else {
 message.reply("Shoma Permission In Kar Ra Nadarid ")
 }
}
})
//____________________________________________________________________________________________
 bot.on('message', message => {
if(message.content.startsWith("1unmute")) {
 if(message.member.hasPermission("ADMINISTRATOR")) { //role mored niyaz 
 let member = message.mentions.members.first()
 if(!member) message.channel.send("Lotfan Yek Nafar Ra Tag/Ping Konid")
 else {
 member.roles.remove("903741212454957136")
 message.channel.send("Member Ba Movafaghiat Unmute Shod")
 }

 }else {
 message.reply("Shoma Permission In Kar Ra Nadarid")
 }
}
})
//____________________________________________________________________________________________
 bot.on('message', message => {
if(message.content.startsWith("!purge")){
let arg = message.content.split(" ")
if(message.member.hasPermission("MANAGE_MESSAGES")) { //role mored niyaz 
let clear = arg[1];
if(!clear) return message.channel.send(`:x: | \`Incorrect usage of command you need to provide an amount of messages to Clear.\` 
**Example:** \`purge 50\` `)
if(isNaN(clear)) return message.channel.send(":x: | ``Please Put a Valid Number to Clear messages.``")
if(clear > 100) return message.channel.send(":x: | ``Shoma Nemitavanid Bishtar Az 100 Message Clear Konid``")
if(clear < 1) return message.channel.send(":x: | ``Shoma Kamtar Az 1 Message Nemitavanid Clear Konid``")

message.channel.bulkDelete(clear)
message.channel.send(`:white_check_mark: | \`Succesfully cleared ${clear} messages! | If purge fails please make sure I have MANAGE_MESSAGES to make the purge seccessful.\` `)
.then(message => 
 message.delete({timeout: 10000})
 )
}else{
message.reply("Shoma Permission In Kar Ra Nadarid")
} 
}
})



//cmd haye bot_____________________________________________________________________________________
 bot.on("message", msg => {
    if (msg.content === "salam")
        msg.reply("salam azizam")
    if (msg.content === "khobi")
        msg.reply("mamnon to chetori ❤️")
    if (msg.content === "kos")
        msg.reply("kos nadide🤐")
    if (msg.content === "kon")
        msg.reply("kon nadide 🙄")
    if (msg.content === "mahmood khani")
        msg.reply("نگاییدم😎")
    if (msg.content === "abolfazl")
        msg.reply("🤬نگاییدم")
    if (msg.content === "radin")
        msg.reply("بچه سال نمیگام😊")
    if (msg.content === "ilia")
        msg.reply("😐کی هس اصن در کل نگاییدم")
    if (msg.content === "سلام")
        msg.reply("سلام عزیزم💕")
    if (msg.content === "داداش")
        msg.reply("🥳اونی که خوردی کله داشت ")
    if (msg.content ===  "بات کسکش")
        msg.reply("😒عمته")
    if (msg.content === "موادب باش")
        msg.reply("نباشم چه گوهی میخوری🤬")
    if (msg.content === "کیکت میکنم ")
        msg.reply("معلوم شد میتونی گوه بخوری😛")
    if (msg.content === "بیا اینو بخور")
        msg.reply("بده عمت🙄")
    if (msg.content === "کون")
        msg.reply("کون ندیده🤣")
    if (msg.content === "فیلم جنده")
        msg.reply("https://cdn.discordapp.com/attachments/819298405532696616/896666196198436894/foxiigram--0001.mp4")
    if (msg.content === "بات کیری")
        msg.reply("😑کیری قیاقته")
    if (msg.content === "کس عمت")
        msg.reply("https://cdn.discordapp.com/attachments/885204247292051526/899997894621421608/VID-20210804-WA0057-1.mp4")
    if (msg.content === "کس ننت")
        msg.reply("https://cdn.discordapp.com/attachments/885204247292051526/899997894621421608/VID-20210804-WA0057-1.mp4")
})

//تعداد کسایی که داخل چنل ویس نشین هستن ________________________________________________________________________
bot.on("ready", () => {
    function AliveVoice() {
        const targetguild = bot.guilds.cache.get("877136060663074836")
        const voiceChannels = targetguild.channels.cache.filter(c => c.type === 'voice');
        let count = 0;

        for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
        bot.user.setActivity(`🔊 Total Mic | ${count}`, { type: "LISTENING" })//mitonid benivisid watching ya streaming ya listening ya playing 
    }; setInterval(AliveVoice, 3000)
});
//afk vc____________________________________________________________________________________________

bot.on('ready', () => {
    ;
    setInterval(() => {
        const channel = bot.channels.cache.get("877642405136973844");  //ID bezar
        if (!channel) return console.error("Channeli Vojod Nadarad");
        channel.join().then(connection => {
        }).catch(e => {

            console.error(e);
        })
    }, 30000);
});
//_________________________________________________________________________________________________




bot.login(config.token);
