const uuid = require('uuid');
const path = require('path');
const ApiError = require("../errors/api.error");
const { Device, DeviceInfo } = require("../models/model");



class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, info, brandId, typeId } = req.body;
      const {img} = req.files;
      let fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      if(info){
          info = JSON.parse(info);
          info.foreach(i=>Device.create({
            title:i.title,
            description:i.description,
            deviceId:i.deviceId
          }))
      }
      
      const device = await Device.create({ name, price, img:fileName, brandId, typeId });
      return res.json(device);
    } catch (error) {
       next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req, res) {
    try {
      let { brandId, typeId, page, limit} = req.query;
      page = page || 1;
      limit = limit || 4;
      let offset = page * limit - limit;

      let devices;
      if(!brandId && !typeId){
         devices = await Device.findAndCountAll({limit, offset});
      }
      if(brandId && !typeId){
        devices = await Device.findAndCountAll({where:{brandId},});
      }
      if(!brandId && typeId){
        devices = await Device.findAndCountAll({where:{typeId},limit, offset});
      }
      if(brandId && typeId){
        devices = await Device.findAndCountAll({where:{typeId,brandId},limit, offset});
      }
      return res.json(devices);
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }
  async getDeviceById(req, res) {
    try {
       const {id} = req.params;
       const device = await Device.findOne({
        where:{id},
        include:[{model:DeviceInfo, as: 'device_infos'}]
    })
    return res.json(device);
    } catch (error) {
       return res.json(error.message);
    }
   
  }
}

module.exports = new DeviceController();
