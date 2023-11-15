import {ref} from "vue";

export default class GlobalData {
    static userId = ref("-10");

    static setUserId(id) {
        localStorage.setItem("userId", id);
        this.userId.value = id;

    }

    static getUserId() {
        const storedId = localStorage.getItem("userId");
        if (storedId) {
            this.userId.value = storedId;
        }
        return this.userId.value;
    }
}
