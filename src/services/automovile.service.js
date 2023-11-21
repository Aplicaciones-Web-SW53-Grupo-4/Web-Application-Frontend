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
    getAutomobilesByFilter(query){
        const queryString = new URLSearchParams(query).toString();
        const ruta = `${basePath}/api/Automobile/search-car/getfilter?${queryString}`;
        console.log("Ruta",ruta);
        return axios.get(ruta);
    }

    getAutomobilesByOwnerId(ownerId){
        return axios.get(`${basePath}/api/Automobile/get-cars/${ownerId}`);
    }

}
