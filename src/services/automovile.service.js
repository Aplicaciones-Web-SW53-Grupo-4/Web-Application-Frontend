import axios from "axios";
import { basePath } from "./basePath";
export class AutomovileService{

    getProductsSmall(){
        return axios.get(`${basePath}/api/Automobile/search-car/getAll`);
    }
    getregister(brand, price, model, color, quantitySeat,transmissionType,classType,place,timeRent,userId,imageurl) {
        const body = { brand, price, model, color, quantitySeat,transmissionType,classType,place,timeRent,userId,imageurl};
        console.log(body);
        return axios.post(`${basePath}/api/Automobile/register`,body);
    }
    getAutomobilesByFilter(brand, price, model, quantitySeat,transmissionType,classType,timeRent){
        const params = {
            brand, price, model, quantitySeat,transmissionType,classType,timeRent};
        console.log(params);
        return axios.get(`${basePath}/api/Automobile/search-car/getfilter`,params);
    }


}
