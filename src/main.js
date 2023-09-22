import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "@/router";
import i18n from "@/i18n";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/arya-purple/theme.css";
import "primeicons/primeicons.css";
// import Button from "primevue/button";
// import InputText from "primevue/inputtext";
// import Calendar from "primevue/calendar";
// import DataTable from 'primevue/datatable';
// import Column from 'primevue/column';
// import SelectButton from 'primevue/selectbutton';
import Toolbar from 'primevue/toolbar';
// import Menubar from 'primevue/menubar';
// import Card from 'primevue/card';

const app =createApp(App);
app.use(i18n);
app.use(PrimeVue);
app.use(router);
app.component("pv-toolbar",Toolbar);

app.mount("#app");
