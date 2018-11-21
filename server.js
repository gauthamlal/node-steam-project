const express = require('express');
const request = require('request');

const {API_KEY} = require('./keys/keys.js') || 'ENTER_YOUR_API_KEY';
let url = 'http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=292030&format=json';
let urlNews = 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=292030&count=4&maxlength=300&format=json';

const app = express();

app.get('/',(req, res) => {
  request(url, (error, response, body) => {
    res.send(response);
  });
});

app.get('/news', (req, res) => {
  request(urlNews, (error, response, body) => {
    let reqBody = body.toString();
    reqBody = JSON.parse(reqBody);
    res.send(reqBody);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000.');
});
