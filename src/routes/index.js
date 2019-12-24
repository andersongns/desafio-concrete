const express = require("express");
const routes = express.Router();

const User = require("../controllers/user");
const Auth = require("../controllers/auth");
const AuthValidation = require("../middlewares/auth");

routes.get("/users/:_id", AuthValidation, User.index);
routes.post("/sign-up", User.store);
routes.post("/sign-in", Auth.store);

module.exports = routes;
