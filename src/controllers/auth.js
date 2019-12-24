const User = require("../models/user");
const encrypty = require("../utils/encrypto");
const yup = require("../validators/auth");
const jwt = require("../utils/jwt");

class AuthController {
    async store(req, res) {
        try {
            const { email, senha } = req.body;
            await yup.validate({ email, senha });

            const user = await User.findOne({
                email,
                senha: encrypty(senha)
            });

            if (!user) {
                throw Error("Usuário e/ou senha inválidos");
            }

            user.ultimo_login = Date.now();
            const token = await jwt(user);
            user.token = `Bearer ${token}`;
            await user.save();

            return res.status(200).json(user);
        } catch (err) {
            return res.status(401).json({ message: err.message });
        }
    }
}

module.exports = new AuthController();
