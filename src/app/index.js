const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

class App {
    constructor() {
        this.server = express();
        this.server.disable("x-powered-by");
        require("../configs/mongoose");
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors());
        this.server.use(express.json());
        this.server.use(
            "/docs",
            express.static(path.resolve(__dirname, "..", "..", "public"))
        );
        require("../utils/yup-locale");
    }

    routes() {
        this.server.use(require("../routes"));
    }
}

module.exports = new App().server;
