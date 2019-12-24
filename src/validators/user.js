const yup = require("yup");

module.exports = yup.object().shape({
    nome: yup
        .string()
        .min(3)
        .max(200)
        .notRequired(),
    email: yup
        .string()
        .email()
        .required(),
    senha: yup
        .string()
        .min(6)
        .max(10)
        .required(),
    telefones: yup
        .array()
        .of(
            yup.object().shape({
                numero: yup.string().length(9),
                ddd: yup
                    .string()
                    .min(2)
                    .max(3)
            })
        )
        .notRequired(),
    ultimo_login: yup.date(),
    token: yup.string()
});
