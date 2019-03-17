const AWS = require('aws-sdk/global');

module.exports = (profile = 'default') => {
    const { accessKeyId, secretAccessKey } = new AWS.SharedIniFileCredentials({ profile });
    return { accessKeyId, secretAccessKey };
};
