const superagent = require("snekfetch");
const Discord = require('discord.js')
module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Egy felhasználónak beállítja hogy ne zavarják!"
        };
    }

  async run(client, message, args, level) {
        if (!message.channel.nsfw) return message.channel.send('🚫 You can use this commands on NSFW Channel!')
    superagent.get('https://nekos.life/api/v2/img/anal')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle(`Enjoy the image.`)
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setTimestamp()
  message.channel.send(lewdembed);
            });
        }
}