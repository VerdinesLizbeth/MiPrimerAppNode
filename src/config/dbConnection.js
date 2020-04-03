const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'sql3.freemysqlhosting.net',
        user: 'sql3330857',
        password: ' jMvCgwggFD',
        database: 'sql3330857'
    });
}