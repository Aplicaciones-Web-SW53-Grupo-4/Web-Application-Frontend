import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "@/router";
import i18n from "@/i18n";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primeicons/primeicons.css";
import Image from 'primevue/image';
import Card from 'primevue/card';
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Calendar from "primevue/calendar";
 import DataTable from 'primevue/datatable';
import SelectButton from 'primevue/selectbutton';
import Toolbar from 'primevue/toolbar';
import Menubar from 'primevue/menubar';
import Divider from 'primevue/divider';


const app =createApp(App);
app.use(i18n);
app.use(PrimeVue);
app.use(router);
app.component("pv-toolbar",Toolbar);
app.component("pv-images",Image);
app.component("pv-card",Card);
app.component("pv-button",Button);
app.component("pv-inputtext",InputText);
app.component("pv-inputpassword",Password);
app.component("pv-divider",Divider);

app.mount("#app");
