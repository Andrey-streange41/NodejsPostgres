import { $authHost, $host } from "./index";


export const createType = async(type) => {
   const {data} = await $authHost.post('api/type/create',type);
   return data;
}

export const fetchTypes = async() => {
    const {data} = await $host.get('api/type/takeAll');
    return data;
 }

 
 export const createBrand = async(brand) => {
   const {data} = await $authHost.post('api/brand/create',brand);
   return data;
}

export const fetchBrands = async() => {
    const {data} = await $host.get('api/brand/takeAll');
    return data;
 }

 export const createDevice = async(device) => {
   const {data} = await $authHost.post('api/device/create',{device});
   return data;
}

export const fetchDevices = async() => {
    const {data} = await $host.get('api/device/takeAll');
    return data.rows;
 }

 export const fetchDeviceById = async(id) => {
   const {data} = await $host.get(`api/device/${id}`);
   return data;
}