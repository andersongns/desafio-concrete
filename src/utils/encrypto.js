const crypto = require("crypto");
require("dotenv").config();

module.exports = password => {
    return crypto
        .createHmac("sha256", process.env.AUTH_TOKEN)
        .update(password)
        .digest("hex");
};
