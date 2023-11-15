import { createApp } from "vue";
import 'primeflex/primeflex.css';
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
import Toolbar from 'primevue/toolbar';
import Divider from 'primevue/divider';
import Message from 'primevue/message';
import Textarea from "primevue/textarea";
import FileUpload from "primevue/fileupload";
import MultiSelect from 'primevue/multiselect';
import Dropdown from 'primevue/dropdown';
import Carousel from 'primevue/carousel';
import RadioButton from "primevue/radiobutton";





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
app.component("pv-message",Message);
app.component("pv-textarea",Textarea);
app.component("pv-fileupload",FileUpload);
app.component("pv-multiselect",MultiSelect);
app.component("pv-dropdown",Dropdown);
app.component("pv-carousel",Carousel);
app.component("pv-radiobutton",RadioButton);

app.mount("#app");

