import { createRouter, createWebHashHistory } from "vue-router";
import loginComponent from "@/components/login-component.vue";



const routes = [
    { path: "/", component:loginComponent },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
