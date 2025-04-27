const { ActivityType } = require('discord.js');

module.exports = {
  ownerId: '1052983625425100812,1365694026115973191,1034430838974189628,1365694026115973191',
  status: {
    rotateDefault: [
      { name: 'Netflix', type: ActivityType.Watching },
      { name: 'GTA VI', type: ActivityType.Playing },
      { name: 'on YouTube', type: ActivityType.Streaming, url: 'https://youtube.com/shorts/QXWMlJqLf0Y?si=NpNp9XnYd7s0h0tR' },
      { name: 'Spotify', type: ActivityType.Listening },
    ],
    songStatus: true
  },
  spotifyClientId: "f71a3da30e254962965ca2a89d6f74b9",
  spotifyClientSecret: "199a619d22dd4e55a4a2c1a7a3d70e63",
}
