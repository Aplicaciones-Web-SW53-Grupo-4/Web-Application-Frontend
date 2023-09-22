import { createRouter, createWebHashHistory } from "vue-router";
import registerTenantComponent from "@/components/Register-tenant-component.vue";
import loginTenantComponent from "@/components/login-tenant-component.vue";
import loginOwnerComponent from "@/components/login-owner-component.vue";
import registerOwnerComponent from "@/components/Register-owner-component.vue";



const routes = [
    { path: "/login-tenant", component:loginTenantComponent },
    { path: "/login-owner", component:loginOwnerComponent},
    { path: "/Register-tenant", component: registerTenantComponent},
    { path: "/Register-owner", component: registerOwnerComponent},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
