const mongoose = require("mongoose");

const schema = mongoose.Schema(
    {
        nome: { type: String },
        email: {
            type: String
        },
        senha: { type: String },
        telefones: [
            {
                numero: { type: String },
                ddd: { type: String }
            }
        ],
        ultimo_login: { type: Date },
        token: { type: String }
    },
    { timestamp: true }
);

module.exports = mongoose.model("User", schema);
