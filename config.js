const { ActivityType } = require('discord.js');

module.exports = {
  ownerId: '1026512578958077972,1052983625425100812',
  
  spotifyClientId: "f71a3da30e254962965ca2a89d6f74b9",
  spotifyClientSecret: "199a619d22dd4e55a4a2c1a7a3d70e63",
  
  updateWatchingActivity(client) {
    const guild = client.guilds.cache.get('1297483796756824186'); // Replace with your server ID
    if (guild) {
      const memberCount = guild.memberCount;
      client.user.setActivity(`Watching over ${memberCount} members`, { type: ActivityType.Watching });
    }
  }
};
