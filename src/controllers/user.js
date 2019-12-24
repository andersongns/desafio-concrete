const User = require("../models/user");
const encrypty = require("../utils/encrypto");
const yup = require("../validators/user");
class UserController {
    async index(req, res) {
        const users = await User.findById(req.params._id);
        return res.status(200).json(users);
    }
    async store(req, res) {
        try {
            const { nome, email, senha, telefones } = req.body;

            await yup.validate({
                nome,
                email,
                senha,
                telefones
            });

            const foundUserSameEmail = await User.findOne({ email });
            if (!!foundUserSameEmail) {
                throw Error("E-mail já existente.");
            }
            const user = new User({
                nome,
                email,
                senha: encrypty(senha),
                telefones
            });

            await user.save();

            return res.status(201).json(user);
        } catch (err) {
            return res.status(401).json({ message: err.message });
        }
    }
}

module.exports = new UserController();
