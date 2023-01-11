
import connection from '../configs/ConnectDB.js';
// import connection from './configs/ConnectDB.js';

class HomeController {

    async index(req, res) {

        const [rows, fields] = await connection.execute('SELECT * FROM users ');
        // console.log("row ", rows);
        // console.log("fields ", fields);
        res.render("index.ejs", { dataUser: rows, tilte: 'Sản phẩm ' })
    };

    async detail(req, res, err) {
        // slug là biến được khai báo trong path trả về

        // var path = req.params.path;
        var id = req.params.id;
        // if (err) return res.render("error.ejs");
        // trả về 1 mảng mảng rows
        const [rows] = await connection.execute('SELECT * FROM users where id = ?', [id]);
        let record1 = rows[0];
        return res.render("detail.ejs", { record: record1 });
        //rows phải là 1 mảng 
        // trả về chuỗi JSON.stringify(rows)

    }


    async create(req, res) {
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var email = req.body.email;
        var address = req.body.address;
        const [rows] = await connection.execute('insert into users(firstName,lastName,email,address) values(?,?,?,?)', [firstName, lastName, email, address]);
        console.log(rows.affectedRows);
        res.redirect("/");
    };

    async delete(req, res) {
        var id = req.body.id;
        console.log("id rows select ", id);
        // var lastName = req.body.lastName;
        // var email = req.body.email;
        // var address = req.body.address;
        const [rows] = await connection.execute('delete from users where id = ?', [id]);
        console.log(rows.affectedRows);
        res.redirect("/");
        // res.send("đây là trang xóa")
    };
    async update(req, res) {
        var id = req.params.id;
        console.log("id rows select ", id);
        const [rows] = await connection.execute('SELECT * FROM users where id = ?', [id]);
        let data = rows[0];
        res.render("updates.ejs", { record: data });
        // res.send("đây là trang xóa")
    };
    async postUpdate(req, res) {
        var id = req.body.id;
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var email = req.body.email;
        var address = req.body.address;
        console.log("id rows select ", id);
        const [rows] = await connection.execute(
            'update users ' +
            'set firstName = ? ,' +
            ' lastName = ? ,' +
            ' email = ? ,' +
            ' address = ? ' +
            'where id = ? ', [firstName, lastName, email, address, id]);
        console.log("số dong thay đổi ", rows.affectedRows);
        res.redirect("/");
        // res.send("đây là trang xóa")
    };

}
export default new HomeController();

