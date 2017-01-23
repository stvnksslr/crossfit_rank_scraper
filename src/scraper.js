const debug = require('debug')('app');
const config = require('config');
const axios = require('axios');
const _ = require('lodash');

const db = require('./settings/database-settings');

// url for reference
// https://games.crossfit.com/competitions/api/v1/competitions/open/2017/leaderboards?page=1&competition=1&year=2017&division=2&scaled=0&sort=0&fittest=1&fittest1=0&occupation=0

let baseUrl = 'https://games.crossfit.com/competitions/api/v1/competitions/open/2017/leaderboards';
let pageNumber = 1;
let totalPageNumbers = 0;

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
        let payload = response.data;
        console.log(_.size(payload.athletes));
    })
    .catch(function (error) {
        console.log(error);
    });