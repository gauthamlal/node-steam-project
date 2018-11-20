const express = require('express');
const request = require('request');

const {API_KEY} = require('./keys/keys.js') || 'ENTER_YOUR_API_KEY';
let url = 'http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=292030&format=json';

const app = express();

app.get('/',(req, res) => {
  request(url, (error, response, body) => {
    res.send(body);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000.');
});
