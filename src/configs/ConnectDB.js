import mysql from 'mysql2/promise'


// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456789aA@',
//     database: 'nodejsbasic'
// });
const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nodejsbasic', password: '123456789aA@' });


connection.connect((err) => {
    if (err) throw err;
    console.log("Connect successfull !!!");
})


class UserRepo {
    // create the connection to database


    // connection.connect((err) => {
    //     if (err) throw err;
    //     console.log("Kết nối thanh công ");
    // })

    //simple query

    selectALL = connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            console.log('>>>>>Check mysql');
            console.log(typeof (results));
            console.log(results);
            // results contains rows returned by server
            // console.log(fields); // fields contains extra meta data about results, if available
        }
    );
}

export default connection;