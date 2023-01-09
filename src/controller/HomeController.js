class HomeController {
    index(req, res) {
        res.render("index.ejs");
    };

    infor(req, res) {
        res.send("Hello Infor !!!");
    }
}
export default new HomeController();

