import {ref} from "vue";

export default class GlobalData {
    static userId = ref("-10");

    static setUserId(id) {
        console.log("Seteando id: " + id);
        localStorage.setItem("userId", id);
        this.userId.value = id;
    }

    static getUserId() {
        const storedId = localStorage.getItem("userId");
        console.log("Obteniendo id: " + storedId);
        if (storedId) {
            this.userId.value = storedId;
        }
        console.log ("Retornando id: " + this.userId.value);
        return this.userId.value;
    }
}
