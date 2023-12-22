const replyRoute = require("express").Router()
const {reply} = require("../controller/replyController")

replyRoute.post("/reply",  reply)

module.exports = {replyRoute}