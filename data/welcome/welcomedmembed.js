const { EmbedBuilder } = require('discord.js');

module.exports = function createWelcomeDMEmbed(member) {
    const username = member.user.username;
    const serverName = member.guild.name;
    const avatar = member.user.displayAvatarURL({ dynamic: true });

    return new EmbedBuilder()
        .setTitle(`Welcome, ${username}!`)
        .setDescription(`Glad to have you here at **${serverName}**!`)
        .setColor('#FFD700') // Gold color for warmth.
        .setThumbnail(avatar)
        .addFields(
            { name: '📌 Member Count', value: `${member.guild.memberCount}`, inline: true } // Inline field for member count.
        )
        .setFooter({ text: `Welcome to ${serverName}` }) // Footer for a neat touch.
        .setTimestamp(); // Automatically includes the current time.
};
