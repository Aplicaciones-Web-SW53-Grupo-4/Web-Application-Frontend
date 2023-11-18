import axios from "axios";
import { basePath } from "./basePath";
export class UserValidationRegisterService {
    login(username,password, userType){
        const body = { username, password,userType };
        return axios.post(`${basePath}/api/User/login`,body);
    }
    register(username, password, userType, name, lastname, adress, phone) {
        const body = { username, password, userType, name, lastname, adress, phone };

        return axios.post(`${basePath}/api/User/register`, body);
    }
}
