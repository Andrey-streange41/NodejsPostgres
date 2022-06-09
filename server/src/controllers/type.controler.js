const { Type } = require("../models/model");
const ApiError = require("../errors/api.error");

class TypeController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      if (!name) {
        return next(ApiError.badRequest("Please set (name) argument !"));
      }
      const type = await Type.create({ name });
      return res.send(type);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
  async getAll(req, res) {
    try {
      const types = await Type.findAll();
      return res.json(types);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = new TypeController();
