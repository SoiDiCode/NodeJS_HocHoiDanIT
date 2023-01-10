
import connection from '../configs/ConnectDB.js';
// import connection from './configs/ConnectDB.js';

class HomeController {

    index(req, res) {
        var data = [];
        connection.query(
            'SELECT * FROM `users` ',
            function (err, results, fields) {
                console.log('>>>>>Check mysql');
                // console.log(typeof (results));
                // console.log(results); // results contains rows returned by server
                // console.log(fields); // fields contains extra meta data about results, if available
                results.map((row) => { data.push(row) })
                console.log(data);
                res.render("index.ejs", { dataUser: JSON.stringify(data) });
            }
        );
        // console.log(typeof (data));
        // console.log(data);


        // data = repo.selectALL.
        // Gán dữ liệu xuống view qua dataUser
        // Chuyển kiểu từ Object sang String qua JSON.stringify
        // res.render("index.ejs", { dataUser: JSON.stringify(data) });
    };

    infor(req, res) {
        res.send("Hello Infor !!!");
    }
}
export default new HomeController();

