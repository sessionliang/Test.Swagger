const Controller = require('../../lib/controller');
const studentSchema = require('./student-schema');

class StudentController extends Controller {
}

var studentController = new StudentController(studentSchema);
studentController.login = function (req, res, next) {
    return this.Facade.findOne(req.body)
        .then(doc => {
            if (doc) {
                var user = {
                    id: doc._id,
                    userName: doc["userName"],
                    token: doc["password"]
                };
                res.setHeader('Content-Type', 'application/json')
                res.status(200).json(doc);
            }
            else {
                res.status(401).json({ error: "验证失败。" });
            }
        })
        .catch(err => next(err));
}

studentController.register = function (req, res, next) {
    var user = {
        userName: req.swagger.params["userName"].value,
        password: req.swagger.params["password"].value
    };

    return this.Facade.findOne(user)
        .then(doc => {
            if (!doc) {
                this.Facade.create(user)
                    .then(doc => res.status(201).json({
                        id: doc._id,
                        userName: doc.userName,
                        token: doc.password
                    }))
                    .catch(err => next(err));
            }
            else {
                res.status(400).json({
                    error: '用户创建失败。'
                });
            }
        })
        .catch(err => next(err));
}
module.exports = studentController;