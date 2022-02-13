const dotenv = require('dotenv-webpack');

module.exports = (config) => {
    config.plugins.push(new dotenv());
    return config;
};