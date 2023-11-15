import axios from "axios";
import { basePath } from "./basePath";
export class AutomovileService{

    getProductsSmall(){
        return axios.get(`${basePath}/api/Automobile/search-car/getAll`);
    }
    getregister(brand, price, model, color, quantitySeat,transmissionType,classType,place,timeRent,userId) {
        const body = { brand, price, model, color, quantitySeat,transmissionType,classType,place,timeRent,userId};
    console.log(body);
        return axios.post(`${basePath}/api/Automobile/register`,body);
    }



}
