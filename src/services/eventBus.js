import {ref} from "vue";

export default class GlobalData {
    static userId = ref(-10);

    static setUserId(id) {
        console.log("VAlor nuevo: ",id);
        this.userId.value = id;
    }

    static getUserId() {
        console.log("Valor actual: ",this.userId.value)
        return this.userId.value;
    }
}