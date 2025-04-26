const { ActivityType } = require('discord.js');

module.exports = {
  ownerId: '1052983625425100812,1026512578958077972',
  status: {
    rotateDefault: async (client) => {
      const guild = client.guilds.cache.first(); // Assuming the bot is in only one guild
      const memberCount = guild ? guild.memberCount : 0;
      return [
        { name: `Watching ${memberCount} members`, type: ActivityType.Watching },
      ];
    },
    songStatus: true,
  },
  spotifyClientId: "f71a3da30e254962965ca2a89d6f74b9",
  spotifyClientSecret: "199a619d22dd4e55a4a2c1a7a3d70e63",
};
