const debug = require('debug')('app');
const config = require('config');
const axios = require('axios');

const db = require('./settings/database-settings');

// url for reference
// https://games.crossfit.com/competitions/api/v1/competitions/open/2017/leaderboards?page=1&competition=1&year=2017&division=2&scaled=0&sort=0&fittest=1&fittest1=0&occupation=0

var baseUrl = 'https://games.crossfit.com/competitions/api/v1/competitions/open/2017/leaderboards';
var pageNumber = 1;

axios.get(baseUrl, {
    params: {
        page: pageNumber,
        competition: 1,
        year: 2017,
        division: 2,
        scaled: 0,
        sort: 0,
        fittest1: 0,
        occupation: 0
    }
})
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });