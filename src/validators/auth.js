const yup = require("yup");

module.exports = yup.object().shape({
    email: yup
        .string()
        .email()
        .required(),
    senha: yup
        .string()
        .min(6)
        .max(10)
        .required()
});
