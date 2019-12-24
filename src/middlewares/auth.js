const User = require("../models/user");
const dateFns = require("date-fns");
const THIRTY_MINUTES = 30;
module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const _id = req.params._id;
        const user = await User.findOne({ _id, token });

        if (!user) {
            throw Error("Não autorizado.");
        }
        const dateWith30Mins = dateFns.addMinutes(
            user.ultimo_login,
            THIRTY_MINUTES
        );

        if (dateFns.isAfter(Date.now(), dateWith30Mins)) {
            throw Error("Sessão inválida.");
        }
    } catch (err) {
        return res.status(401).json({ message: err.message });
    }

    return next();
};
