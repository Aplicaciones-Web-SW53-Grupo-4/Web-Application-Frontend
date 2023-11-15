import axios from "axios";
import { basePath } from "./basePath";
const http = axios.create({
    baseURL: basePath+"/api",
});

class UseApiService {
    getAll() {
        return http.get("users");
    }
    getByid(id) {
        return http.get("users/" + id);
    }

    create(body) {
        return http.post("users", body);
    }
    update(id, body) {
        return http.put("users/" + id, body);
    }
    delete(id) {
        return http.delete("users/" + id);
    }



    getProfileByUserId(id) {
        return http.get(`/Profile/${id}`)
    }
}

export default UseApiService;
