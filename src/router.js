import { createRouter, createWebHashHistory } from "vue-router";
import registerTenantComponent from "@/components/register/register-tenant-component.vue";
import loginTenantComponent from "@/components/login/login-tenant-component.vue";
import loginOwnerComponent from "@/components/login/login-owner-component.vue";
import registerOwnerComponent from "@/components/register/register-owner-component.vue";
import rentTenantMajor from "@/components/rent/rent-tenant/rent-tenant-major-component.vue";
import cashPayment from "@/components/rent/rent-tenant/cash-payment-component.vue";
import onlinePayment from "@/components/rent/rent-tenant/online-payment-component.vue";
import rentOwnerMajor from "@/components/rent/rent-owner/rent-owner-major-component.vue";
import rentRequestsOwner from "@/components/rent/rent-owner/rent-requests-owner-component.vue";
import profileRequest from "@/components/rent/rent-owner/profile-request-component.vue";
import pageNotFound from "@/components/error/page-not-found.vue";
import homeTenantComponent from "@/components/home/home-tenant-component.vue";
import homeOwnerComponent from "@/components/home/home-owner-component.vue";
import welcome from "@/components/welcome/welcome-component.vue";
import profileOwner from "@/components/profile/profile-owner-component.vue";
import profileTenant from "@/components/profile/profile-tenant-component.vue";
import SearchCarComponent from "@/components/search-car/search-car.component.vue";
import searchCarComponent from "@/components/search-car/search-car.component.vue";
import rentalAgreementComponent from "@/components/search-car/rental-agreement.component.vue";
import registerCarComponent from "@/components/register-car/register-car.component.vue";
import generateContractComponent from "@/components/register-car/generate-contract.component.vue";

const routes = [
    { path: "/", component: welcome },
    { path: "/login-tenant", component:loginTenantComponent },
    { path: "/login-owner", component:loginOwnerComponent},
    { path: "/register-tenant", component: registerTenantComponent},
    { path: "/register-owner", component: registerOwnerComponent},
    { path: "/home-owner", component: homeOwnerComponent},
    { path: "/rental-agreement", component: rentalAgreementComponent},
    { path: "/home-tenant", component: homeTenantComponent},
    { path: "/profile-owner", component: profileOwner},
    { path: "/profile-tenant", component: profileTenant},
    { path: "/rent-tenant-major", component: rentTenantMajor},
    { path: "/rent-owner-major", component: rentOwnerMajor},
    { path: "/cash-payment", component: cashPayment},
    { path: "/online-payment", component: onlinePayment},
    { path: "/rent-requests-owner", component: rentRequestsOwner},
    { path: "/profile-request", component: profileRequest},
    { path: "/register-car", component: registerCarComponent},
    {path: "/search-car", component: searchCarComponent},
    {path: "/generate-contract", component: generateContractComponent},
    { path: "/:pathMatch(.*)*", component: pageNotFound },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
