
let mock = require('mockjs');

module.exports = function () {
    let list = mock.mock({
        'list|8': [{
            ver: 'v0.1',
            config: '配置文件',
            num: 4
        }]
    });
    return {
        code: 0,
        msg: '',
        data: list
    };
};
