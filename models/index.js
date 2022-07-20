const dbConfig = require("../config/db.config")
const mongoose = require("mongoose")

mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.mongoUrl = dbConfig.mongoURl

// Database Name
//db.employee = require("./employee.model")(mongoose)
db.admin = require('./admin.model')(mongoose)

module.exports = db