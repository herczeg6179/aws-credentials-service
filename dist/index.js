'use strict';

var AWS = require('aws-sdk/global');

module.exports = function () {
    var profile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

    var _ref = new AWS.SharedIniFileCredentials({ profile: profile }),
        accessKeyId = _ref.accessKeyId,
        secretAccessKey = _ref.secretAccessKey;

    return { accessKeyId: accessKeyId, secretAccessKey: secretAccessKey };
};