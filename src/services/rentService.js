import axios from "axios";
import { basePath } from "./basePath";
export class RentService{

    createRequestRent(body){
        return axios.post(`${basePath}/api/RequestRent`,body);
    }
    getRequestsByOwnerId(ownerId){
        return axios.get(`${basePath}/api/RequestRent/owner/${ownerId}`);
    }
    getRequestsByTenantId(tenantId){
        return axios.get(`${basePath}/api/RequestRent/tenant/${tenantId}`);
    }
    updateRequestStatusById(id,body){
        return axios.put(`${basePath}/api/RequestRent/${id}`,body);
    }
}
