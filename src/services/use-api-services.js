import axios from "axios";

const http = axios.create({
    baseURL: "",
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
}

export default UseApiService;
