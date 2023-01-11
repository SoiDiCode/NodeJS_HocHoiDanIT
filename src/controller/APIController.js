import connection from '../configs/ConnectDB.js';
class API {
    // http
    // trả ra trạng thái và trả ra trạng dữ liệu mà client đọc đc
    // có 2 loại chuẩn format : json và xml
    // json bản chất là object => chuyển dữ liệu thành object
    // restfull là những quy định được đặt ra trong API
    // API là 1 đường link chứa dữ liệu

    async getAllUsers(req, res) {
        const [rows, fields] = await connection.execute('SELECT * FROM users ');
        return res.status(200).json({
            mess: 'oke',
            data: rows
        });
    };
    async createUser(req, res) {
        // var firstName = req.body.firstName;
        // var lastName = req.body.lastName;
        // var email = req.body.email;
        // var address = req.body.address;
        let { firstName, lastName, email, address } = req.body;
        if (!firstName || !lastName || !email || !address) {
            return res.status(200).json({
                mess: 'create fail',
            });
        }

        const [rows] = await connection.execute('insert into users(firstName,lastName,email,address) values(?,?,?,?)', [firstName, lastName, email, address]);
        return res.status(200).json({
            mess: 'oke',

        });
    };

    async updateUser(req, res) {
        // var id = req.body.id;
        // var firstName = req.body.firstName;
        // var lastName = req.body.lastName;
        // var email = req.body.email;
        // var address = req.body.address;
        let { firstName, lastName, email, address, id } = req.body;

        if (!firstName || !lastName || !email || !address || !id) {
            return res.status(200).json({
                mess: 'update fail',
            });
        }
        const [rows] = await connection.execute(
            'update users ' +
            'set firstName = ? ,' +
            ' lastName = ? ,' +
            ' email = ? ,' +
            ' address = ? ' +
            'where id = ? ', [firstName, lastName, email, address, id]);
        return res.status(200).json({
            mess: 'update sucess',
        });

    };

    async deleteUser(req, res) {
        var id = req.params.id;
        if (!id) {
            return res.status(200).json({
                mess: 'Not find ID',
            });
        }
        const [rows] = await connection.execute('delete from users where id = ?', [id]);
        return res.status(200).json({
            mess: 'delete successful !!!',

        });
    };
}

export default new API(); 