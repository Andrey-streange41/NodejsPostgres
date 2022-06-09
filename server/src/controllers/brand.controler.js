const { Brand } = require("../models/model");
const ApiError = require("../errors/api.error");

class BrandController {
  async create(req,res, next) {
    try {
      const { name } = req.body;
      if (!name) {
        return next(ApiError.badRequest("Please set (name) argument !"));
      }
      const brand = await Brand.create({ name });
      return res.status(200).send(brand);
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }
  async getAll(req, res) {
    try {
      const brands = await Brand.findAll();
      return res.json(brands);
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }
}

module.exports = new BrandController();
