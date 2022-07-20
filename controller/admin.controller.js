const adminModel = require("../models/admin.model");
const bcrypt = require("bcrypt");
const create = (req, res, next) => {
  const { email, password } = req.body;

  adminModel.create(
    {
      email,
      password,
    },
    (err, result) => {
      if (err) next(err);
      else
        res.status(200).json({
          status: "Success",
          message: "Admin Added Successfully",
          data: result,
        });
    }
  );
};

const login = (req, res, next) => {
  adminModel.findOne({ email: req.body.email }, (err, result) => {
    if (err) {
      next(err);
    } else {
      if (bcrypt.compare(req.body.password, result.password)) {
        res.json({
          status: "success",
          message: "successfully logged in",
          data: {
            admin: result,
          },
        });
      }
    }
  });
};

module.exports = { create, login };
