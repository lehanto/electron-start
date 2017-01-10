(function(){
    let clickEventName = 'click';
    let clickButtonEventHandler = function(){
        let mysql      = require('mysql');
        let connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '232002',
            database : 'beer'
        });
        connection.connect();
 
        connection.query('SELECT * FROM beer.beers;', function(err, rows, fields) {
            if (err) throw err;
            if(rows.length > 0){
                let table = document.querySelectorAll('[elc-js=SelectResultTbl]')[0]
                let tableBody = table.querySelectorAll('tbody')[0];
                tableBody.innerHTML = '';
                tableBody.insertAdjacentHTML('beforeend','<tr><td>' + rows[0].id + '</td></tr>');
            }
        });
 
        connection.end();
    };
    if(querySelectorAll('[elc-js=ExecuteQUeryBtn]')[0] != null){
    document.querySelectorAll('[elc-js=ExecuteQUeryBtn]')[0].addEventListener(clickEventName, clickButtonEventHandler);
    }
}());