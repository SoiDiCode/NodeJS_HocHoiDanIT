
import connection from '../configs/ConnectDB.js';
// import connection from './configs/ConnectDB.js';

class HomeController {

    async index(req, res) {

        const [rows, fields] = await connection.execute('SELECT * FROM users ');
        console.log("row ", rows);
        console.log("fields ", fields);
        res.render("index.ejs", { dataUser: rows, tilte: 'Sản phẩm ' })
    };

    async chucnang(req, res, err) {
        // slug là biến được khai báo trong path trả về
        // var id = req.params.slug;
        var path = req.params.path;
        var id = req.params.slug;
        if (path == "detail") {
            // if (err) return res.render("error.ejs");
            // trả về 1 mảng mảng rows
            const [rows] = await connection.execute('SELECT * FROM users where id = ?', [id]);
            let record1 = rows[0];
            console.log(record1);
            return res.render("detail.ejs", { record: record1 });
            //rows phải là 1 mảng 
            // trả về chuỗi JSON.stringify(rows)

        }
        if (path == "delete") return res.send("Đây là trang xóa")
        else return res.send("Đây là trang update")

    }
}
export default new HomeController();

