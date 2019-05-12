const fullConfig = require('../webpack.config');

module.exports = async ({ config }) => {
    Object.assign(config, {
        resolve: fullConfig.resolve,
    });

    return config;
};
