const dotenv = require('dotenv').config();

const Config = {};

Config.PORT = process.env.PORT;
Config.DATABASE_URL = process.env.DATABASE_URL;

module.exports = Config;