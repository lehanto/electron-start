(function mysqlConnect(){
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        database: 'beer',
        user: 'root',
        password: '232002'
    });

    var query = connection.query('select * from beers;', function (err, results) {
        console.log('--- results ---');
        console.log(results);
        console.log('name is ...');
        console.log(results[0].last_name);
    });

    connection.end(function() {
        console.log('connection end');
    });
}());