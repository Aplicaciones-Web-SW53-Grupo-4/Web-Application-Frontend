import { createRouter, createWebHashHistory } from "vue-router";
import registerTenantComponent from "@/components/register/Register-tenant-component.vue";
import loginTenantComponent from "@/components/login/login-tenant-component.vue";
import loginOwnerComponent from "@/components/login/login-owner-component.vue";
import registerOwnerComponent from "@/components/register/Register-owner-component.vue";
import rentTenantMajor from "@/components/rent/rent-tenant/rent-tenant-major.vue";



const routes = [
    { path: "/", component:loginTenantComponent },
    { path: "/login-owner", component:loginOwnerComponent},
    { path: "/Register-tenant", component: registerTenantComponent},
    { path: "/Register-owner", component: registerOwnerComponent},
    { path: "/rent-tenant-major", component: rentTenantMajor},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
